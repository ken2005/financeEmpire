
function renvoyerA(){
    return '';
}

function renvoyerB(){
    return 'b';
}

class Voiture {
    constructor(marque, modele, annee, kilometrage){
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.kilometrage = kilometrage;
    }
    
    rouler(km){
        this.kilometrage += km;
    }
}

class Dé {
    constructor(){
        this.positions = [];
        for (let i = 0; i < 6; i++){
            let elem = document.createElement('h1');
            elem.innerHTML = i+1;
            this.positions.push(elem);
        }
        console.log(this.positions);
    }
    lancer(){
        return Math.floor(Math.random() * 6) + 1;
    }
    lancerEtAnimer(){
        let img = document.createElement('img');
        img.src = './image/deRotate.gif';
        img.style.width = '10em';
        img.style.height = '10em';
        img.classList.add('shadow');
        //img.style.margin = '10px';
        //document.getElementsByClassName('emplacement-de')[0].appendChild(img);
        //*
        let a = document.getElementsByClassName('emplacement-de')[0]
        a.innerHTML = '';
        a.appendChild(img);
        /*a.backgroundImage = "url("+img.src+")";
        a.style.backgroundSize = '100%';
        //*/
        
        //img.style.transform = 'rotate('+Math.random()*360+'deg)';
        let resultat = this.lancer();
        let positions = this.positions;
        setTimeout(function(){
            //document.getElementsByClassName('emplacement-de')[0].removeChild(img);
            a.removeChild(img);
            /*
            let b = document.createElement('h1');
            b.innerHTML = resultat;
            *///*
           console.log(positions[resultat-1]);
            console.log(positions[resultat-1]);
            a.appendChild(positions[resultat-1]);
            //document.getElementsByClassName('emplacement-de')[0].backgroundImage = 'none';
        }, 1000);
        //*/
        return resultat;
    }
}

class Pioche {
    constructor(desCartes){
        this.cartes = desCartes;
    }

    piocher(){
        return this.cartes.pop();
    }
    
}

class Joueur {
    constructor(nom, pionSRC){
        this.nom = nom;
        this.pionELM = document.createElement('h1');
        this.pionELM.innerHTML = pionSRC;
        this.pionELM.className = 'pion';
        this.pionELM.style.backgroundColor = 'red';
        this.pionInd = this.pionELM.cloneNode(true);
        this.cartes = [];
        this.argent = 500;
        this.position = 0;

        //indicateur
        let indicateur = document.createElement('div');
        indicateur.className = 'player';
        let details = document.createElement('div');
        details.className = 'details';
        let name = document.createElement('p');
        name.innerHTML = this.nom;
        let argent = document.createElement('p');
        let argentValeur = document.createElement('span');
        argentValeur.className = 'valeurArgent';
        argentValeur.innerHTML = this.argent;
        argent.appendChild(argentValeur);
        argent.appendChild(document.createTextNode('$'));
        let status = document.createElement('p');
        status.innerHTML = "en jeu";
        /*let pion = document.createElement('img');
        pion.src = this.pionIMG;
        pion.className = 'pion';*/
        details.appendChild(name);
        details.appendChild(status);
        indicateur.appendChild(this.pionInd);
        indicateur.appendChild(details);
        indicateur.appendChild(argent);
        this.indicateur = indicateur;
        document.getElementById('joueurs').appendChild(indicateur);
    }
    afficherPion(){
        document.getElementById('case'+this.position).appendChild( this.pionELM);
    }
    cacherPion(){
        document.getElementById('case'+this.position).removeChild( this.pionELM);
    }

    actualiserArgent(){
        document.getElementById('joueurs').appendChild(this.indicateur);
        let argentValeur = this.indicateur.querySelector('.valeurArgent');
        argentValeur.innerHTML = this.argent;
    }

    acheterCarte(carte,boolPromo){
        if (boolPromo){
            this.argent -= carte.prixApresPromo;
        }
        else{
            this.argent -= carte.prixTotal;
        }
        this.cartes.push(carte);
    }

    gagnerArgent(somme){
        this.argent += somme;
    }

    perdreArgent(somme){
        this.argent -= somme;
    }

    avancer(nbCase, plateau){
        this.cacherPion();
        if (this.position + nbCase > plateau.cases.length){
            this.argent += 200;
        }
        this.position += nbCase;
        this.afficherPion();
    }

    jouerTour(){
        this.indicateur.classList.add('active');
        this.status = "en train de jouer...";
    }
    finTour(){
        this.actualiserArgent();
        this.indicateur.classList.remove('active');
    }
}

class Case{
    constructor(nom,imgLink){
        this.nom = nom;
        this.imgLink = imgLink;
        let element = document.createElement('div');
        element.className = 'case';
        element.style.backgroundImage = "url('"+imgLink+"')";
        this.element = element;
        this.joueurs = [];
        this.proprietaire = null;
    }
    ajouterJoueur(joueur){
        this.joueurs.push(joueur);
    }
    retirerJoueur(joueur){
        this.joueurs.pop(joueur);
    }
    agir(joueur){
        // à surcharger selon la case
    }
}

class CaseDepart extends Case {
    constructor(nom, imgLink){
        super(nom, imgLink);
    }
    agir(joueur){
        joueur.gagnerArgent(200);
    }
}
class CaseImpot extends Case {
    constructor(nom, imgLink, pourcentage){
        super(nom, imgLink);
        this.pourcentage = pourcentage;
    }
    agir(joueur){
        joueur.perdreArgent(this.pourcentage * joueur.argent / 100);
    }
}
class CaseBanque extends Case {
    constructor(nom, imgLink, pioche, echelon){
        super(nom, imgLink);
        this.pioche = pioche;
        this.echelon = echelon;
    }
    agir(joueur){
        joueur.gagnerArgent(200);
    }
}

class CaseChance extends Case {
    constructor(nom, imgLink, pioche){
        super(nom, imgLink);
        this.pioche = pioche;
    }
    agir(joueur){
        let carte = this.pioche.piocher();
        carte.agir(joueur);
    }
}

class CaseMalChance extends Case {
    constructor(nom, imgLink, pioche){
        super(nom, imgLink);
        this.pioche = pioche;
    }
    agir(joueur){
        let carte = this.pioche.piocher();
        carte.agir(joueur);
    }
}


class Carte {
    constructor(nom){
        this.nom = nom;
        let element = document.createElement('div');
        element.className = 'carte';
        element.appendChild(document.createElement('h1')).innerHTML = this.nom;
        this.element = element;
        
    }
}

class Question {
    constructor(enoncee, reponses, bonneReponse){
        this.enoncee = enoncee;
        this.reponses = reponses;
        this.bonneReponse = bonneReponse;
    }
    verifierReponse(reponse){
        return reponse == this.bonneReponse;
    }
}

class Questionnaire {
    constructor(questions){
        this.questions = questions;
    }
}

class CarteBancaire extends Carte {
    constructor(nom, prix, typeCarte){
        super(nom);
        this.typeCarte = typeCarte;
        this.prixTotal = prix;
        this.prixApresPromo = prix;
        this.questionnaire = questionnaire;
        this.element.appendChild(document.createElement('h3')).innerHTML = this.nom;
    }

}

class CarteEvenement extends Carte {
    constructor(nom, somme, estPositif){
        super(nom);
        this.somme = somme;
        this.estPositif = estPositif;
    }

    agir(joueur){
        if (this.estPositif){
            joueur.gagnerArgent(this.somme);
        }
        else{
            joueur.perdreArgent(this.somme);
        }
    }

    
}

class Plateau{
    constructor(cases, pioche){
        this.cases = cases;
        this.pioche = pioche;
    }
}

class Partie{
    constructor(joueurs, plateau){
        this.joueurs = joueurs;
        this.plateau = plateau;
        this.pioche = new Pioche(plateau.cartes);
        this.tour = 0;
        this.tourActuel = this.joueurs[0];
        this.tourActuel.jouerTour();
        this.joueurs.forEach(joueur => {
            joueur.afficherPion()
        });
    }
    jouerTour(de){
        /*document.getElementById('bouton-dé').style.display = 'none'*/
        this.tourActuel.jouerTour();
        let resultat = de.lancerEtAnimer()
        let tempThis = this;
        setTimeout(function(){
            
            tempThis.tourActuel.avancer(resultat , tempThis.plateau);
            tempThis.tourActuel.finTour();
            tempThis.tourActuel = tempThis.joueurs[tempThis.tour % tempThis.joueurs.length];
            tempThis.tour++;
            /*document.getElementById('bouton-dé').style.display = 'bloc'*/
        }, 1000);

    }
    tourSuivant(){
        this.tourActuel.finTour();
        this.tour++;
        this.tourActuel = this.joueurs[this.tour % this.joueurs.length];
        this.tourActuel.jouerTour();
        //this.tourActuel.avancer(this.tourActuel.de.lancer(), this.plateau);
    }
    afficherJoueur(joueur){
        document.getElementById('case'+joueur.position).innerHTML = joueur.pionELM;
    }
}
function afficherJoueur(joueur){
    document.getElementById('case'+joueur.position).appendChild( joueur.pionELM);
}

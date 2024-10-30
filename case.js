class CasePlacement extends Case{
    constructor(nom, imgLink, pioche){
        super(nom, imgLink);
        this.pioche = pioche;
    }
    agir(joueur){
        let carte = this.pioche.piocher();
        carte.agir(joueur);
    }
}
class CaseBourse extends Case{
    constructor(nom, imgLink, pioche){
        super(nom, imgLink);
        this.pioche = pioche;
    }
    agir(joueur){
        let carte = this.pioche.piocher();
        carte.agir(joueur);
    }
}

class CaseEpargne extends Case{
    constructor(nom, imgLink){
        super(nom, imgLink);
    }
    agir(joueur){
        joueur.gagnerArgent(200);
    }
}

const cases=[
    new CaseDepart("Depart","./image/Case_Départ.png"),
    new CaseBanque("La Banque Postal","./image/Case_BanquePostale_Bleu.png",new Pioche([]),1),
    new Case("vide","./image/Case_Vide.png"),
    new CaseBanque("La Banque Postale","./image/Case_BanquePostale_jaune.png",new Pioche([]),2),
    new CasePlacement("PEA","./image/Case_Placement_PEA.png",new Pioche),
    new CaseChance("Chance","./image/Case_Chance.png",new Pioche([])),
    new CaseBanque("Banque Populaire","./image/Case_BanquePopulaire_Bleu.png",new Pioche([]),1),
    new CaseBourse("Bourse","./image/Case_Bourse.png",new Pioche([])),
    new CaseBanque("Banque Populaire","./image/Case_BanquePopulaire_Jaune.png",new Pioche([]),2),
    new CaseBanque("Banque Populaire","./image/Case_BanquePopulaire_Noir.png",new Pioche([]),3),
    new CaseEpargne("Epargne","./image/Case_Epargne.png"),
    new CaseBanque("Crédit Mutuel","./image/Case_CréditMutuel_Bleu.png",new Pioche([]),1),
    new CasePlacement("Livre A","./image/Case_Placement_LivretA.png",new Pioche([])),
    new CaseBanque("Crédit Mutuel","./image/Case_CréditMutuel_Jaune.png",new Pioche([]),2),
    new CaseBanque("Crédit Mutuel","./image/Case_CréditMutuel_Noir.png",new Pioche([]),3),
    new CaseMalChance("malchance","./image/Case_Malchance.png",new Pioche([])),
    new CaseBanque("Societe general","./image/Case_SociétéGénérale_Bleu.png",new Pioche([]),1),
    new CaseBourse("Bourse","./image/Case_Bourse.png",new Pioche([])),
    new CaseBanque("Societe general","./image/Case_SociétéGénérale_Jaune.png",new Pioche([]),2),
    new CaseBanque("Societe general","./image/Case_SociétéGénérale_Noir.png",new Pioche([]),3),
    new CaseImpot("impot","./image/Case_impots.png",5),
    new CaseBanque("Caisse Epargne","./image/case_CaiseeEpargne_Bleu.png",new Pioche([]),1),
    new CasePlacement("PEA","./image/Case_Placement_PEA.png",new Pioche([])),
    new CaseBanque("Caisse Epargne","./image/case_CaiseeEpargne_Jaune.png",new Pioche([]),2),
    new CaseBanque("Caisse Epargne","./image/case_CaiseeEpargne_Noir.png",new Pioche([]),3),
    new CaseChance("Chance","./image/Case_Chance.png",new Pioche([])),
    new CaseBanque("LCL","./image/case_LCL_Bleu.png",new Pioche([]),1),
    new CaseBanque("LCL","./image/case_LCL_Jaune.png",new Pioche([]),2),
    new CaseBourse("Bourse","./image/Case_Bourse.png",new Pioche([])),
    new CaseBanque("LCL","./image/case_LCL_Noir.png",new Pioche([]),3),
    new Case("AMF","./image/Case_AMF.png"),
    new CaseBanque("BNB Paradis","./image/Case_Bnp_Bleu.png",new Pioche([]),1),
    new CaseBanque("BNB Paradis","./image/Case_Bnp_Jaune.png",new Pioche([]),2),
    new CasePlacement("Livre A","./image/Case_Placement_LivretA.png",new Pioche([])),
    new CaseBanque("BNB Paradis","./image/Case_Bnp_Noir.png",new Pioche([]),3),
    new CaseMalChance("malchance","./image/Case_Malchance.png",new Pioche([])),
    new CaseBourse("Bourse","./image/Case_Bourse.png",new Pioche([])),
    new CaseBanque("Rothschild & Co","./image/Case_Rothschild_Jaune.png",new Pioche([]),2),
    new Case("vide","./image/Case_Vide.png"),
    new CaseBanque("Rothschild & Co","./image/Case_Rothschild_Noir.png",new Pioche([]),3)
];
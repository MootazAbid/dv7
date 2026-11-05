export interface Categorie {
  idCat?: number;
  nomCat?: string;
}

export class Produit {
  idProduit?: number;
  nomProduit = '';
  prixProduit?: number;
  dateCreation?: string | Date;
  categorie?: Categorie;
}

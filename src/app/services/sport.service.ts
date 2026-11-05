import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../model/sport.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProduitService {
  constructor(private http: HttpClient) {}

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.apiURL);
  }

  ajouterProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(environment.apiURL, produit, httpOptions);
  }

  supprimerProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiURL}/${id}`);
  }

  consulterProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${environment.apiURL}/${id}`);
  }

  updateProduit(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(
      `${environment.apiURL}/${produit.idProduit}`,
      produit,
      httpOptions
    );
  }

  rechercherParNom(nom: string): Observable<Produit[]> {
    const term = (nom ?? '').trim().toLowerCase();
    return this.listeProduits().pipe(
      map(produits => produits.filter(p => p.nomProduit?.toLowerCase().includes(term)))
    );
  }
}

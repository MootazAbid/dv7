import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../model/sport.model';

@Pipe({ name: 'searchFilter', standalone: true })
export class SearchFilterPipe implements PipeTransform {
  transform(produits: Produit[], searchTerm: string): Produit[] {
    if (!produits) return [];
    if (!searchTerm || !searchTerm.trim()) return produits;
    const term = searchTerm.trim().toLowerCase();
    return produits.filter(p => p.nomProduit?.toLowerCase().includes(term));
  }
}

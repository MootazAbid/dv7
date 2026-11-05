import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/sport.model';
import { ProduitService } from '../services/sport.service';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {
  allProduits: Produit[] = [];
  nomRecherche = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe({
      next: produits => this.allProduits = produits ?? [],
      error: err => console.error('Erreur recherche produits:', err)
    });
  }
}

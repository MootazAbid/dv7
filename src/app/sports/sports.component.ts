import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/sport.model';
import { ProduitService } from '../services/sport.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent implements OnInit {
  produits: Produit[] = [];
  message = '';

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(): void {
    this.produitService.listeProduits().subscribe({
      next: produits => {
        this.produits = produits ?? [];
        this.message = '';
      },
      error: err => {
        console.error('Erreur chargement produits:', err);
        this.message = 'Impossible de charger les produits. Vérifiez que l’API est démarrée et que l’URL est correcte.';
      }
    });
  }

  supprimerProduit(produit: Produit): void {
    if (produit.idProduit == null) return;
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.supprimerProduit(produit.idProduit).subscribe({
        next: () => this.chargerProduits(),
        error: err => {
          console.error('Erreur suppression produit:', err);
          this.message = 'Impossible de supprimer ce produit.';
        }
      });
    }
  }
}

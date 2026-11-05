import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/sport.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/sport.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-sport.component.html'
})
export class UpdateSportComponent implements OnInit {
  currentProduit = new Produit();
  categorieId?: number;
  message = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.produitService.consulterProduit(id).subscribe({
      next: produit => {
        this.currentProduit = produit;
        this.categorieId = produit.categorie?.idCat;
      },
      error: err => {
        console.error('Erreur chargement produit:', err);
        this.message = 'Impossible de trouver ce produit.';
      }
    });
  }

  updateProduit(): void {
    this.message = '';
    if (this.categorieId != null) {
      this.currentProduit.categorie = { idCat: Number(this.categorieId) };
    }

    this.produitService.updateProduit(this.currentProduit).subscribe({
      next: () => this.router.navigate(['/produits']),
      error: err => {
        console.error('Erreur modification produit:', err);
        this.message = 'Modification impossible. Vérifiez l’URL et les champs attendus par votre API.';
      }
    });
  }
}

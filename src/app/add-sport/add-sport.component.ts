import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/sport.model';
import { ProduitService } from '../services/sport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-sport.component.html',
  styleUrl: './add-sport.component.css'
})
export class AddSportComponent {
  newProduit = new Produit();
  categorieId?: number;
  message = '';

  constructor(private produitService: ProduitService, private router: Router) {}

  addProduit(): void {
    this.message = '';
    // La colonne categorie_id_cat indique une relation vers une catégorie.
    // On envoie donc la catégorie sous forme d'objet avec son id.
    if (this.categorieId != null) {
      this.newProduit.categorie = { idCat: Number(this.categorieId) };
    }

    this.produitService.ajouterProduit(this.newProduit).subscribe({
      next: () => this.router.navigate(['/produits']),
      error: err => {
        console.error('Erreur ajout produit:', err);
        this.message = 'Ajout impossible. Vérifiez les champs attendus par votre API et l’identifiant de catégorie.';
      }
    });
  }
}

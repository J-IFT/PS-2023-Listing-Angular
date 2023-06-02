import { Component } from '@angular/core';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListingProduits';
  selectedProduct: any;
  isEditing = false;

  showProductForm(): void {
    this.selectedProduct = null; // Réinitialiser le produit sélectionné
    // Afficher le formulaire en définissant la variable selectedProduct sur une nouvelle instance vide
    this.selectedProduct = {
      id: '',
      nom: '',
      texture: '',
      grammage: '',
      couleur: ''
    };

    if (!this.isEditing) {
      this.selectedProduct = null;
      this.isEditing = true;
    };
  }
}

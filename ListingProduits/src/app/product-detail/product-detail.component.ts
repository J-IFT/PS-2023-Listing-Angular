import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: Product | null = null;
  @Input() isEditing = false;

  cancel(): void {
    this.product = null;
  }

  save(): void {
    // Ajoutez ici la logique pour enregistrer les modifications du produit
    console.log('Produit enregistré :', this.product);
    this.cancel();
  }

  updateProduct(): void {
    // Ajoutez ici la logique pour mettre à jour le produit
    console.log('Produit mis à jour :', this.product);
    this.cancel();
  }
}
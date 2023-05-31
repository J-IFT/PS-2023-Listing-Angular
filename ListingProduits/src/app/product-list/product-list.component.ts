import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    { id: '1', nom: 'Produit 1', texture: 'Texture 1', grammage: 'Grammage 1', couleur: 'Couleur 1' },
    { id: '2', nom: 'Produit 2', texture: 'Texture 2', grammage: 'Grammage 2', couleur: 'Couleur 2' },
    // Ajoutez d'autres produits si nécessaire
  ];

  selectedProduct: Product | null = null;
  isEditing = false; // Ajoutez cette ligne pour définir la propriété isEditing

  ngOnInit(): void {
    // Sélectionner le premier produit de la liste
    this.selectedProduct = this.products[0];
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}
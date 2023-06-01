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
  isEditing = false;
  newProduct: Product = {
    id: '',
    nom: '',
    texture: '',
    grammage: '',
    couleur: ''
  };

  ngOnInit(): void {
    this.selectedProduct = this.products[0];
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  getMaxProductId(): number {
    let maxId = 0;
    for (const product of this.products) {
      const productId = parseInt(product.id, 10);
      if (productId > maxId) {
        maxId = productId;
      }
    }
    return maxId;
  }

  showProductForm(): void {
    if (!this.isEditing) {
      this.selectedProduct = null;
      this.isEditing = true;
    }
  }

  addProduct(): void {
    const newProductId = this.getMaxProductId() + 1;
    const newProduct: Product = {
      id: newProductId.toString(),
      nom: this.newProduct.nom,
      texture: this.newProduct.texture,
      grammage: this.newProduct.grammage,
      couleur: this.newProduct.couleur
    };
    this.products.push(newProduct);
    this.isEditing = false;
  }

  cancelAdd(): void {
    this.isEditing = false;
  }
}
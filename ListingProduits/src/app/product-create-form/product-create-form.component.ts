import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create-form',
  templateUrl: './product-create-form.component.html',
  styleUrls: ['./product-create-form.component.css']
})
export class ProductCreateFormComponent {
  newProduct: Product = {
    id: '', // L'ID sera généré par le service
    nom: '',
    texture: '',
    grammage: '',
    couleur: ''
  };

  constructor(private productService: ProductService) {}

  createProduct() {
    this.productService.createProduct(this.newProduct);

    // Réinitialiser les valeurs du formulaire
    this.newProduct = {
      id: '',
      nom: '',
      texture: '',
      grammage: '',
      couleur: ''
    };
  }

  goBack() {
    // Retourner en arrière (utiliser la fonction de navigation précédente du navigateur)
    window.history.back();
  }
}
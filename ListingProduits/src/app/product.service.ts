import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: '1', nom: 'Produit 1', texture: 'Texture 1', grammage: '10', couleur: 'Couleur 1' },
    { id: '2', nom: 'Produit 2', texture: 'Texture 2', grammage: '20', couleur: 'Couleur 2' },
    // Ajoutez d'autres produits si nécessaire
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      setTimeout(() => {
        observer.next(this.products);
        observer.complete();
      }, 1000); // Simule un délai de 1 seconde
    });
  }
  
  getProductById(id: string): Observable<Product | undefined> {
    return new Observable<Product | undefined>(observer => {
      setTimeout(() => {
        const product = this.products.find(p => p.id === id);
        observer.next(product);
        observer.complete();
      }, 1000); // Simule un délai de 1 seconde
    });
  }
  
  createProduct(product: Product) {
    // Générer un nouvel ID pour le produit
    const newId = this.generateProductId();

    // Créer un nouvel objet Product avec l'ID généré
    const newProduct: Product = {
      id: '',
      nom: product.nom,
      texture: product.texture,
      grammage: product.grammage,
      couleur: product.couleur
    };

    // Ajouter le produit à la liste des produits
    this.products.push(newProduct);

    // Afficher les produits (pour vérification)
    console.log(this.products);
  }

  private generateProductId(): number {
    // Générer un ID unique pour le produit (vous pouvez utiliser votre propre logique ici)
    // Pour cet exemple, nous générons simplement un nombre aléatoire entre 1 et 1000
    return Math.floor(Math.random() * 1000) + 1;
  }

  updateProduct(product: Product): Observable<void> {
    if (product.id) {
      const index = this.products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.products[index] = product;
      }
    } else {
      // Générer un nouvel identifiant pour un nouveau produit
      const newId = (this.products.length + 1).toString();
      product.id = newId;
      this.products.push(product);
    }
    return of();
  }
}
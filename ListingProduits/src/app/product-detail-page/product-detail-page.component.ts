import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id') || '';
      if (productId === '0') {
        // Créer un nouveau produit
        this.product = { id: '', nom: '', texture: '', grammage: '', couleur: '' };
      } else {
        // Charger les détails du produit existant
        this.loadProductDetails(productId);
      }
    });
  }

  loadProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  saveProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.router.navigate(['/product-list']);
      });
    }
  }

  goBack() {
    // Retour à la page précédente
    this.router.navigate(['/product-list']);
  }
}
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(productUrl: string) {
    let message = encodeURIComponent(`Check out this product: ${productUrl}`);
    window.open(`https://t.me/share/url?url=${message}`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

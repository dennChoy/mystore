import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: '1',
      name: 'Mac',
      price: 100,
      image: './assets/images/mac.jpg'
    },
    {
      id: '2',
      name: 'iPhone',
      price: 150,
      image: './assets/images/iphone.png'
    },
    {
      id: '3',
      name: 'Headphone',
      price: 340,
      image: './assets/images/headphones.jpg'
    }
  ]

}

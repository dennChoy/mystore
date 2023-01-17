import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  //Input se importó desde @angular/core. Input permite recibir atributos desde un componente padre, en este caso se recibirá desde app.component.ts
  //En este ejemplo: @Input('myProduct') product: Product = {} -> myProduct será el nombre de la variable que se usará en el componente padre: app-product [myProduct]="product" *ngFor="let product of products"></app-product>
  //Al no enviar nada se recibe por default el nombre de la variable: product en este caso

  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    name:''
  }

}

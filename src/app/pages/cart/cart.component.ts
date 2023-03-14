import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "cart.component.html",
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  constructor(private _cartService: CartService) {}
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 4,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Mars",
        price: 212,
        quantity: 1,
        id: 2,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<String> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  getTotal(items: Array<CartItem>): number {
    return this._cartService.getTotal(items);
  }
}

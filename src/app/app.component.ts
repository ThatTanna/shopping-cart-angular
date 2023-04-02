import { Component, Input } from '@angular/core';
import { Cart, Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart 31';

  // items is an array of Item objects that will be passed to the shopping cart component
  items: Item[] = [];

  // addToCart is a function that will be called from the inventory component
  // when the user clicks on the Add to Cart button in the inventory component
  addToCart(item: Item) {
    this.items.push(item);
    console.log(`${item.name} arrived in ParentComponent`);
    console.log(this.items);
};
}
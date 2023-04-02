import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../models';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
// items import from mock-items.ts
  items = ITEMS;
  // Output decorator to emit an event
  // when the user clicks the "Add to Cart" button
  @Output() addToCart = new EventEmitter<Item>();
  // onAdd() method to emit the event from html
  onAdd(item: Item) {
    window.alert(`${item.name} has been added to the cart!`);
    // addToCart is an EventEmitter
    // emit() method to emit the event
    // (item) is the payload of the event
    this.addToCart.emit(item);
    console.log(`Inventory: ${item.name} to cart`);

  }

}

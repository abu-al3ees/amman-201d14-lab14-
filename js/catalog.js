/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  let option;
  for (let i in Product.allProducts) {
    option=document.createElement('option');
    selectElement.appendChild(option);
    option.textContent=Product.allProducts[i].name;

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
let item;
let quantity;
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  item=event.target.items.value;
 quantity = event.target.quantity.value;
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
//let add=[];
function addSelectedItemToCart() {
  cart.addItem(item,quantity);
 //event.preventDefault();
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
 // let item=event.target.items.value;
  //let quantity = event.target.quantity.value;



}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let counter=0
function updateCounter() {
  let countEL=document.getElementById('itemCount');
  counter++;
  countEL.textContent=counter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
const contant=document.getElementById('cartContents');
let ulEl=document.createElement('ul');
contant.appendChild(ulEl);
function updateCartPreview() {
let li=document.createElement('li');
ulEl.appendChild(li);
li.textContent=`${item}  ${quantity}`;

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

# amman-201d14-lab14-

our group contain :mohammad alkhazali and areen and duha
## mohammad work

inside catalog.js{
first  populateForm()
me mohammad  and duha work on it 
const selectElement = document.getElementById('items');
i create this to get the select element from index.html then i creadted option variable global
and insude the for loop i assigned the option var to createElement('option');
to craete option element every loop
and appnedchiled for the  selectElement  and put textContant to fill the option in products 

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


function updateCounter()

i declared a variable global counter =0
then i created in side the function 
 1. let countEL=document.getElementById('itemCount');
to get the span element from index.html
and counter ++;
to add 1 for each add item
then i 
  countEL.textContent=counter;
  to chang the text contant to counter


}
inside cart.js

## me and areen work on it 
but i faced problem in `cart.items.length `  and `areen` solve it 
let trE1 //global for the best practic
let tdE1; //global for the best practic
function showCart() {
for(let i=0;i<cart.items.length;i++){
  // TODO: Find the table body
 trE1=document.createElement('tr'); ccreate a row1
table.appendChild(trE1); put the row inside the table 
tdE1=document.createElement('td'); create td 
trE1.appendChild(tdE1); put the td inside the row
tdE1.textContent='X'; fill the td in X

let itemE1=document.createElement('td'); create another td for quantity
trE1.appendChild(itemE1);  put the td inside the row
itemE1.textContent=cart.items[i]. quantity; fill the td in quantity
let itemE2=document.createElement('td');create another td for item
trE1.appendChild(itemE2); put the td inside the row
itemE2.textContent=cart.items[i].product;  fill the td in item

}
trE1.onclick(removeItemFromCart); i tried this to remove item but it remove from the bottom of the table

## mohammad work 
 i think about it too much the i decided to use onclick function but idont know how to use it in the right way
for the function removeItemFromCart(event) { 
  trE1.remove(); i tried this to remove item but it remove from the bottom of the table and give me an erorr


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}
## for the
function clearCart() {
  trE1.remove(); i tried this it work but but it will delete all rows first when i go to the cart.html
}




## areen did this

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







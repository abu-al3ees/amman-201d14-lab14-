# amman-201d14-lab14-

our group contain :mohammad alkhazali and areen and duha
## mohammad work

1. inside catalog.js{
1. first  populateForm()
1. me mohammad  and duha work on it 
1. const selectElement = document.getElementById('items');
1. i create this to get the select element from index.html then i creadted option variable global
1. and insude the for loop i assigned the option var to createElement('option');
1. to craete option element every loop
1. and appnedchiled for the  selectElement  and put textContant to fill the option in products 

1. function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  1. const selectElement = document.getElementById('items');
  1. let option;
  1. for (let i in Product.allProducts) {
    1. option=document.createElement('option');
    1. selectElement.appendChild(option);
     1. option.textContent=Product.allProducts[i].name;

  }

}


function updateCounter()

1. i declared a variable global counter =0
 1. then i created in side the function 
 1. let countEL=document.getElementById('itemCount');
1. to get the span element from index.html
1. and counter ++;
1. to add 1 for each add item
1. then i 
  1. countEL.textContent=counter;
  1. to chang the text contant to counter


}
### inside cart.js

## me and areen work on it 
but i faced problem in `cart.items.length `  and `areen` solve it.

let trE1 //global for the best practic.

let tdE1; //global for the best practic.

1. function showCart() {
1. for(let i=0;i<cart.items.length;i++){
  // TODO: Find the table body
1.  trE1=document.createElement('tr'); ccreate a row1
1. table.appendChild(trE1); put the row inside the table 
1. tdE1=document.createElement('td'); create td 
1. trE1.appendChild(tdE1); put the td inside the row
1. tdE1.textContent='X'; fill the td in X

1. let itemE1=document.createElement('td'); create another td for quantity
1. trE1.appendChild(itemE1);  put the td inside the row
1. itemE1.textContent=cart.items[i]. quantity; fill the td in quantity
1. let itemE2=document.createElement('td');create another td for item
1. trE1.appendChild(itemE2); put the td inside the row
1. itemE2.textContent=cart.items[i].product;  fill the td in item

}
1. trE1.onclick(removeItemFromCart); i tried this to remove item but it remove from the bottom of the table

## mohammad work 
 i think about it too much the i decided to use onclick function but idont know how to use it in the right way
1. for the function removeItemFromCart(event) { 
 1.  trE1.remove(); i tried this to remove item but it remove from the bottom of the table and give me an erorr


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}
## for the
1. function clearCart() {
  1. trE1.remove(); i tried this it work but but it will delete all rows first when i go to the cart.html
}




## areen did this

1. let item;
1. let quantity;
1. function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  1. event.preventDefault();
  1. item=event.target.items.value;
 1. quantity = event.target.quantity.value;
  // Do all the things ...
  1. addSelectedItemToCart();
  1. cart.saveToLocalStorage();
  1. updateCounter();
  1. updateCartPreview();

}







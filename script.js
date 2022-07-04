// Spread:
//1- scrivere una funzione che unisce le proprietà di due oggetti
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }

//2- Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line

const obj1 = {foo: 'bar'};
const obj2 = {name: 'Mio nome'};

const objects = {...obj1, ...obj2, surname: 'Mio cognome'}



// Destructuring:
// Usiamo il filter per prendere solo le stringhe >= 10 caratteri da un array, usando il destructuring per prendere la length

const names = ['Alessandro', 'Lucia', 'Ferdinando', 'Maria', 'Bernadette'];
const filteredNames = names.filter(name => name.length >= 10)
// const filteredNames = names.filter((name) => {
//   const { length } = name;
  
//   if ({ length } >= 10) {
//     return name;
//   }
//   });
const {length} = filteredNames;



// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:

// leggere _products nel getter
// sovrascrivere _products nel setter
// contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body
// shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
// // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

// const shop = {
//   _products: [],
//   get products() {

//   },
//   set products(val) {

//   }
// }

const shop = {
  _products: [
    { id: 1, name: "TV", price: 80 },
    { id: 2, name: "Tablet", price: 50 },
  ],
  get getProducts() {
    return this._products;
  },
  set setProducts(value) {
    this._products = [...this._products, value];
  },
};

shop.setProducts = { id: 3, name: "iPhone", price: 10 };
shop.setProducts = { id: 4, name: "Computer", price: 30 };

const body = document.querySelector("body");
body.innerHTML = `
<h1>Lista prodotti</h1>
<ul>
<li class= "productCard"><p>Id: ${shop.getProducts[0].id}</p>  <p> Name: ${shop.getProducts[0].name}</p> <p>Price: ${shop.getProducts[0].price}</p> </li>
<li class= "productCard"><p>Id: ${shop.getProducts[1].id}</p>  <p> Name: ${shop.getProducts[1].name}</p> <p>Price: ${shop.getProducts[1].price}</p> </li>
<li class= "productCard"><p>Id: ${shop.getProducts[2].id}</p>  <p> Name: ${shop.getProducts[2].name}</p> <p>Price: ${shop.getProducts[2].price}</p> </li>
<li class= "productCard"><p>Id: ${shop.getProducts[3].id}</p>  <p> Name: ${shop.getProducts[3].name}</p> <p>Price: ${shop.getProducts[3].price}</p> </li>
</ul>`;
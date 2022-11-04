'use strict'
const productName = prompt('Введите название товара', 'Apple');
const productCount = +prompt('Введите количество товара', 0);
const productCategory = prompt('Введите название товара', 'Fruct');
const productPrice = +prompt('Введите количество товара', 10);

console.log(Number.isFinite(productCount), Number.isFinite(productPrice))
console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${productCount * productPrice} рублей`);
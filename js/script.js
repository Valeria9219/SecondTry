'use strict'

const productName = prompt('Введите название товара', 'Apple');
const productCount = +prompt('Введите количество товара', 0);
const productCategory = prompt('Введите название товара', 'Fruct');
const productPrice = +prompt('Введите цену товара', 10);

if (!Number.isFinite(productCount)) {
    console.log("1.Вы ввели некорректные данные")
}
if (!Number.isFinite(productPrice)) {
    console.log("2.Вы ввели некорректные данные")
}
// console.log(Number.isFinite(productCount), Number.isFinite(productPrice))
// console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${productCount * productPrice} рублей`);


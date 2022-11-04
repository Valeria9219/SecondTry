'use strict'
// №2
const rain = Math.round(Math.random() * 10);
console.log(rain);

if (rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
}

if (rain === 0) {
    console.log("Дождя нет!");
}

// №3
const one = prompt('Введите кол-во баллов по математике:', 0);
const two = prompt('Введите кол-во баллов по русскому языку', 0);
const three = prompt('Введите кол-во баллов по информатике:', 0);

if ((one + two + three) >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
}

// №4
const cash = prompt('Сколько денЮШек вы хотите снять', 0);
if (cash % 100 === 0) {
    console.log("Получите указанную сумму");
}
else {
    console.log("Банкомат не может выдать указанную сумму>");
}


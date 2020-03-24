'use strict'; //ставить всегда

// console.log('Hello, world!');

//переменные
var leftBorderWidth = 1; //существует до выполнения скрипта 
let second = 2; //хойстинг, всплытие переменной, появляется когда код до неё доходит
const pi = 3.14; //аналогично let, нельзя изменить

//классификация типов данных

/*числовые данные: числа, Infinity (/0), NaN
строка "string" ковычки!!
символ
логический true/false var boolean = true;
null что-то не существует
indefined что-то существует, но значения не имеет
объект var obj = {методы=функции} коллекция данных
*/
/*
let person = {
    name: "John",
    age: 25,
    isMarried: false
}
console.log(person.age); //25
console.log(person['isMarried']);*/

//массив

//let photo = ['plum.png', 'carrot.jpg', 'potatoe.jpg'];

//console.log(photo[0]); //всё с нуля

//общение с пользователем

//console.log(); видно только в панели разработчика

//alert('Hello World!');
//модальное окно, после него все скрипты останавливаются

//confirm('Whazup?');
//модальное окно с кнопками ок и cancel

/*let answer = confirm('Whazup?');

console.log(answer);
ответ попадает в консоль булиновым значением*/

//prompt модальное окно с формой для ответа, часть после запятой подставлена по умолчанию (может быть пустой)
//let answer = prompt('Can U hear me now?', 'Yeah');

//console.log(answer);

//конкатенация 
//console.log('Star' + ' Wars'); строка
//console.log(4 + ' Star'); строка 4 Star

//

// let incr = 10,
//     decr = 10; 

// incr++; //плюс 1
// decr--; //минус 1
// console.log(incr);
// console.log(decr);

// let isChecked = true, 
//     isClosed = false;

// console.log(isChecked && isClosed); //оба должны соответствовать
// console.log(isChecked || isClosed); //или или 

//!isClosed знак отрицания (превращает в true)

//надо что-то изменить для гита, ну
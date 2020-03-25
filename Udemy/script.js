'use strict'; 

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money, //бюджет
    timeData: time,
    expenses: {}, //объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: false
};

let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
	a1 = prompt('Во сколько обойдется?', ''),
	b = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b1 = prompt('Во сколько обойдется?', '');

    appData.expenses[a] = a1;
    appData.expenses[b] = b1;
    
alert(appData.budget / 30);
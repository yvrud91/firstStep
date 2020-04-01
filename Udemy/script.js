use strict;

let money, time; 

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money, //бюджет
    timeData: time,
    expenses: {}, //объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    income: [], // массив данных с доп. доходом
    savings: true,
};

function detectDayDudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayDudget();

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("error");
            i--;
        }
    
    }
}
chooseExpenses(); 

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log ("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Высокий уровень достатка");
    } else {
        console.log ("Произошла ошибка");
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt('Под какой процент?');

    appData.monthIncome = save/100/12*percent;
    alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let c = prompt ("Введите необязательную статью расходов в этом месяце", ""),
            d = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(c)==='string' && typeof(c) != null && typeof(d) != null && c != "" && d != "" && c.length < 50) {
    
            console.log ("done");
    
            appData.expenses[c] = d;
        } else {                            
            console.log ("error");
            i--;
        }
    }
}
chooseOptExpenses();
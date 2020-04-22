'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    li = document.createElement("li"),
    adv = document.getElementsByClassName("adv")[0],
    title = document.getElementById('title'),
    opinion = prompt("Как вы относитесь к технике Apple?", ""),
    bord = document.getElementById("prompt");

menu.insertBefore(menuItem[2], menuItem[1]);

li.classList.add("menu-item");
li.textContent = "Пятый элемент";
menu.appendChild(li);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

bord.textContent = opinion;
"use strict";


const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '800px';
btns[2].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.background = 'blue';
});

const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);
hearts[2].before(div);
hearts[1].replaceWith(circle[2]);
div.innerHTML = 'Hi dear freand';
div.textContent = 'hi';
div.insertAdjacentHTML('beforebegin', '<h1>jdfj</h1>')

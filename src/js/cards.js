// import menu from '../menu.json';
// import menuTemplate from '../templates/template.hbs';

// const menuContainer = document.querySelector('.js-menu');

// const menuCards = menuTemplate(menu);

// menuContainer.innerHTML = menuCards;

import menu from '../menu.json';
import menuTemplate from '../templates/template.hbs';

const menuContainer = document.querySelector('.js-menu');

const menuCards = menuTemplate(menu);

menuContainer.innerHTML = menuCards;
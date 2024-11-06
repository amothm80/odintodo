import './styles.css';
import { chickenMenu } from './chickenMenu.js';
import { meatMenu } from './meatMenu.js';
import { veganMenu } from './veganMenu.js';

function init() {
  let mainContent = document.getElementById('content');
  mainContent.innerHTML = '';
  let menuList = chickenMenu.buildMenu(1);
  for (let el of menuList) {
    mainContent.appendChild(el);
  }
}

const page = (function () {
  let buttons = document.querySelectorAll('.nav-button');
  init();
  for (let btn of buttons) {
    btn.onclick = function () {
      let mainContent = document.getElementById('content');
      mainContent.innerHTML = '';
      let menuList = '';
      switch (btn.id) {
        case 'chicken-salads-button':
          menuList = chickenMenu.buildMenu();
          break;
        case 'meat-salads-button':
          menuList = meatMenu.buildMenu();
          break;
        case 'vegan-salads-button':
          menuList = veganMenu.buildMenu();
          break;
      }
      for (let el of menuList) {
        mainContent.appendChild(el);
      }
    };
  }
})();

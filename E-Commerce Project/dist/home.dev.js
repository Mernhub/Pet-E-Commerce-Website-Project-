"use strict";

//Copy Menu For Mobile
function copyMenu() {
  //copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML; // copy indide nav to nav

  var mainNav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML; //copy .header-top .wrapper to .thetop-nav

  var topNav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu(); //show mobile menu

var menuButton = document.querySelector('.trigger');
closeButton = document.querySelector('.t-close');
addclass = document.querySelector('.site');
menuButton.addEventListener('click', function () {
  addclass.classList.toggle('showmenu');
});
closeButton.addEventListener('click', function () {
  addclass.classList.remove('showmenu');
}); // showing sub menu on mobile

var submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach(function (menu) {
  return menu.addEventListener('click', toggle);
});

function toggle(e) {
  var _this = this;

  e.preventDefault();
  submenu.forEach(function (item) {
    return item != _this ? item.closest('.has-child').classList.remove('expand') : null;
  });
  if (this.closest('.has-child').classList != 'expand') ;
  this.closest('.has-child').classList.toggle('expand');
} //slider


var swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
var dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function () {
  dptClass.classList.toggle('showdpt');
}); //stock product bar width percentage

var stocks = document.querySelectorAll('.products.big .stock');

for (var x = 0; x < stocks.length; x++) {
  var stock = stocks[x].dataset.stock,
      available = stocks[x].querySelector('.qty_available').innerHTML,
      sold = stocks[x].querySelector('.qty_sold').innerHTML,
      percent = sold * 100 / stock;
  stocks[x].querySelector('.available').style.width = percent + '%';
} //show cart on click


var divtoShow = '.mini-cart';
var divPopup = document.querySelector(divtoShow);
var divTrigger = document.querySelector('.cart-trigger');
divTrigger.addEventListener('click', function () {
  setTimeout(function () {
    if (!divPopup.classList.contains('show')) {
      divPopup.classList.add('show');
    }
  }, 25);
}); //close by click outside

document.addEventListener('click', function (e) {
  var isClosest = e.target.closest(divtoShow);

  if (!isClosest && divPopup.classList.contains('show')) {
    divPopup.classList.remove('show');
  }
}); //show modal on load 

window.onload = function () {
  document.querySelector('.site').classList.toggle('showmodal');
};

document.querySelector('.modalclose').addEventListener('click', function () {
  document.querySelector('.site').classList.remove('showmodal');
});
//Copy Menu For Mobile
function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy indide nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;


}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger');
closeButton = document.querySelector('.t-close');
addclass = document.querySelector('.site');
menuButton.addEventListener('click', function () {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function () {
    addclass.classList.remove('showmenu')
})


// showing sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}




const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site')
searchButton.addEventListener('click', function () {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function () {
    showClass.classList.remove('showsearch')
})

// show dpt menu

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt')
})


//stock product bar width percentage
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty_available').innerHTML,
    sold = stocks[x].querySelector('.qty_sold').innerHTML,
    percent = sold * 100 / stock;
    
    stocks[x].querySelector('.available').style.width = percent + '%';
}

//show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 25 )
})

//close by click outside
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }
})



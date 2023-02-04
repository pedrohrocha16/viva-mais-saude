//JS MENU
var clkMenu = window.document.getElementsByClassName('material-symbols-outlined')[0]

clkMenu.addEventListener('click', clickMenu)

function clickMenu() {
    if (itens.style.display == 'flex') {
     itens.style.display = 'none'
    }
    else {
     itens.style.display = 'flex'
    }
 }

 // JS RollPage
var rollPag1 = window.document.getElementById('menu__li1')
var rollPag2 = window.document.getElementById('menu__li2')
var rollPag3 = window.document.getElementById('menu__li3')

rollPag1.addEventListener('click', rollPage1)
rollPag2.addEventListener('click', rollPage2)
rollPag3.addEventListener('click', rollPage3)


function rollPage1(){
    window.scrollTo(0, 500)
}
function rollPage2(){
    window.scrollTo(0, 1100);
}
function rollPage3(){
    window.scrollTo(0, 2100);
}

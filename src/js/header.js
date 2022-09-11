let burger = document.querySelector('.burger')
let headerList = document.querySelector('.header__list')
let headerBlock = document.querySelector('.header__block')
let headerBtn = document.querySelector('.header__btns')


burger.onclick = function () {
    burger.classList.toggle('burger_active')
    headerList.classList.toggle('header__list_active')
    headerBlock.classList.toggle('header__block_active')
    headerBtn.classList.toggle('header__btns_active')
}
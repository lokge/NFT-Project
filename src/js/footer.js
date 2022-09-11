let accordions = document.querySelectorAll('.footer__top-item')

accordions.forEach(function (el) {
    el.addEventListener('click', function () {
        accordions.forEach(function (item) {
            if (el !== item || el.classList.contains('footer__top-item-links-open')) {
                item.classList.remove('footer__top-item-links-open');
            } else {
                item.classList.add('footer__top-item-links-open');
            }
        });
    });
});




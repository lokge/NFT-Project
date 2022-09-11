let accordions = document.querySelectorAll('.questions__home-block-item')

accordions.forEach(function (el) {
    el.addEventListener('click', function () {
        accordions.forEach(function (item) {
            if (el !== item || el.classList.contains('questions__home-block-item-open')) {
                item.classList.remove('questions__home-block-item-open');
            } else {
                item.classList.add('questions__home-block-item-open');
            }
        });
    });
});





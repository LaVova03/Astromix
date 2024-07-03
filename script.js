document.addEventListener('DOMContentLoaded', function () {
    var burgerIcon = document.getElementById('burger-icon');
    var close = document.getElementById('burger-close');
    var menu = document.getElementById('menu');

    burgerIcon.addEventListener('click', function () {
        menu.id = 'menu_open';
        menu.style.right = '0';
    });

    close.addEventListener('click', function () {
        menu.id = 'menu_close';
        menu.style.right = '-100%';
    })
});

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav-list');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__nav-list--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav-list--active');

    document.body.classList.remove('stop-scroll');
  })
})

'use strict';

var logo = document.querySelector('#logo');

logo.style.display = 'block';

var logoAnimation = new Vivus('logo', { duration: 300 }, function () {
  logo.setAttribute('class', 'active');
});

logoAnimation.stop().reset().play(1);
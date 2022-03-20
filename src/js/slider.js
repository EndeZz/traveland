'use strict';

const slider = document.querySelector('.offers__group');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const item = document.querySelector('.offers__item');

let itemleft = 0;
let itemline = 0;

btnNext.addEventListener('click', function () {
  itemleft = itemleft - 325;
  itemline = itemline + 46;
  if (itemleft < -1300) {
    itemleft = -1300;
    itemline = 180;
  }
  slider.style.left = `${itemleft}px`;
  item.style.left = `${itemline}px`;
});

btnPrev.addEventListener('click', function () {
  itemleft = itemleft + 325;
  itemline = itemline - 46;

  if (itemleft > 0) {
    itemleft = 0;
    itemline = 0;
  }
  slider.style.left = `${itemleft}px`;
  item.style.left = `${itemline}px`;
});

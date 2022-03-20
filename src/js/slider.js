'use strict';

const container = document.querySelector('.offers__container');
const track = document.querySelector('.offers__group');
const items = document.querySelectorAll('.offers__card');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let position = 0;
const slideToShow = 4;
const slideToScroll = 1;

const itemsCount = items.length;
const itemWidth = container.clientWidth / slideToShow;
const movePosition = slideToScroll * itemWidth;

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
  console.log(position);
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position * 0.06}%)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
};

checkBtns();

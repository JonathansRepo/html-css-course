const icon1 = document.querySelector('.icon-1');
const icon2 = document.querySelector('.icon-2');
const icon3 = document.querySelector('.icon-3');
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');

icon1.addEventListener('click', function () {
  item2.classList.remove('open');
  item3.classList.remove('open');
  item1.classList.toggle('open');
});

icon2.addEventListener('click', function () {
  item1.classList.remove('open');
  item3.classList.remove('open');
  item2.classList.toggle('open');
});

icon3.addEventListener('click', function () {
  item1.classList.remove('open');
  item2.classList.remove('open');
  item3.classList.toggle('open');
});

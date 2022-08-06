'use strict';

const submit = document.querySelector('.submit');
const hidden = document.querySelector('.hidden')
const modal = document.querySelector('.modal')
const container = document.querySelector('.container')
const btnEl = document.querySelectorAll('.btn');
const rate = document.querySelectorAll('.rate')


submit.addEventListener('click',function(){
  modal.classList.remove('hidden');
  container.style.display = 'none'
})








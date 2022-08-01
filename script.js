'use strict';

const submit = document.querySelector('.submit');
const hidden = document.querySelector('.hidden')
const modal = document.querySelector('.modal')
const container = document.querySelector('.container')
const one = document.querySelector('.one');


submit.addEventListener('click',function(){
  modal.classList.remove('hidden');
  container.style.display = 'none'


})

one.addEventListener('click', function() {
  one.style.backgroundColor = '#7c8798'
  
})





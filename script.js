;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }
  const $carousel = get('.carousel');
  const $prevBtn = get('.prev_button');
  const $nextBtn = get('.next_button');
  let yDeg = 0;

  const init = () => {
    $prevBtn.addEventListener('click', () => {
      yDeg += 60;
      console.log(yDeg);
      $carousel.style.transform = `translateZ(-346px) rotateY( ${yDeg}deg)`;
      console.log($carousel.style.transform)
    })
    
     $nextBtn.addEventListener('click', () => {
       yDeg -= 60;
       $carousel.style.transform = `translateZ(-346px) rotateY( ${yDeg}deg)`;
    })
  }

  init();
})()

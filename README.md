# James

Live : - https://soumik2001.github.io/James/


document.addEventListener("DOMContentLoaded", () => {
  const middle = document.querySelector('.middle');
  const slides = document.querySelectorAll('.swiper-slide');
  const leftArrow = document.querySelector('.left img');
  const rightArrow = document.querySelector('.right img');
  const inner = document.querySelector('.inner');

  let slideIndex = 0;
  const slideWidth = slides[0].offsetWidth + 12;
  const slidesToShow = 5; 
  const totalSlides = slides.length;

  const slideContainerWidth = slideWidth * slidesToShow; 


  // Clone slides to create infinite effect
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    middle.appendChild(clone);
  });


  middle.style.width = `${slideContainerWidth * 2}px`; 

  // Initialize scroll to start at the first slide
  middle.scrollLeft = 0;

  // Scroll slider by 5 slides
  function scrollSlider(direction) {
    if (direction === 'next') {
      slideIndex += slidesToShow;
    } else if (direction === 'prev') {
      if (slideIndex === 0) {
        slideIndex = totalSlides;
        middle.scrollLeft = totalSlides * slideWidth;
      }
      slideIndex -= slidesToShow;
    }

    middle.scrollTo({
      left: slideIndex * slideWidth,
      behavior: 'smooth'
    });

    // When scrolling reaches the end, smoothly reset to the first set of slides
    if (slideIndex >= totalSlides * 2) {
      setTimeout(() => {
        slideIndex = 0;
        middle.scrollLeft = 0;
      }, 300); // Small delay to create smooth reset effect
    }
  }

  // Navigation button event listeners
  rightArrow.addEventListener('click', () => {
    scrollSlider('next');
  });

  leftArrow.addEventListener('click', () => {
    scrollSlider('prev');
  });
});

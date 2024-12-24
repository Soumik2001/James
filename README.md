# James

Live : - https://soumik2001.github.io/James/


document.addEventListener("DOMContentLoaded", () => {
  const middle = document.querySelector(".middle");
  const slides = document.querySelectorAll(".swiper-slide");
  const leftArrow = document.querySelector(".left img");
  const rightArrow = document.querySelector(".right img");

  let slideIndex = 0;
  const slidesPerView = 5; // Number of slides visible at a time
  const slideWidth = slides[0].offsetWidth + 12; // Include margin
  const totalSlides = slides.length;

  // Clone slides for infinite scrolling
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    middle.appendChild(clone);
  });

  // Initialize scroll position
  middle.scrollLeft = 0;

  // Scroll the carousel
  function scrollSlider(direction) {
    if (direction === "next") {
      slideIndex += slidesPerView;
    } else if (direction === "prev") {
      if (slideIndex === 0) {
        slideIndex = totalSlides; // Move to the last set of slides
        middle.scrollLeft = totalSlides * slideWidth;
      }
      slideIndex -= slidesPerView;
    }

    middle.scrollTo({
      left: slideIndex * slideWidth,
      behavior: "smooth",
    });

    if (slideIndex >= totalSlides) {
      setTimeout(() => {
        slideIndex = 0;
        middle.scrollLeft = 0;
      }, 300); // Adjust timeout to match scroll duration
    }
  }

  // Auto-scroll functionality
  let autoScroll = setInterval(() => scrollSlider("next"), 3000);

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  function startAutoScroll() {
    autoScroll = setInterval(() => scrollSlider("next"), 3000);
  }

  // Event listeners
  rightArrow.addEventListener("click", () => {
    stopAutoScroll();
    scrollSlider("next");
  });

  leftArrow.addEventListener("click", () => {
    stopAutoScroll();
    scrollSlider("prev");
  });

  middle.addEventListener("mouseenter", stopAutoScroll);
  middle.addEventListener("mouseleave", startAutoScroll);
});

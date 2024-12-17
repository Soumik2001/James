document.addEventListener('DOMContentLoaded', function () {
  const bars = document.querySelectorAll('.bar');
  const categories = document.querySelectorAll('.category');
  
  let activeCategoryIndex = 0;
  
  function changeCategory(index) {

    categories[activeCategoryIndex].classList.remove('active');
    bars[activeCategoryIndex].classList.remove('active');
    
    categories[index].classList.add('active');
    bars[index].classList.add('active');
    
    activeCategoryIndex = index;
  }
  
  bars.forEach((bar, index) => {
    bar.addEventListener('click', function () {
      changeCategory(index);
    });
  });

  // Initialize with the first category active
  changeCategory(activeCategoryIndex);
});



const navLinks = document.querySelectorAll('.tnav');
const sections = document.querySelectorAll('.list');


document.querySelector('.tnav[data-section="news"]').classList.add('active');
document.querySelector('.tnav[data-section="news"]').style.cursor = 'default'; 
document.getElementById('news').classList.add('active');


navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    if (this.classList.contains('active')) return;

navLinks.forEach(link => link.style.cursor = 'pointer'); 
    this.style.cursor = 'default';


    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');


    sections.forEach(section => section.classList.remove('active'));
    const targetId = this.getAttribute('data-section');
    document.getElementById(targetId).classList.add('active');
  });
});



 // Thumbnail Carousel start here



const mainImages = document.querySelectorAll('.topImage img');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseover', function() {

    const targetImageId = this.getAttribute('data-image');
    const targetImage = document.getElementById(targetImageId);


    mainImages.forEach(img => img.classList.remove('active'));


    targetImage.classList.add('active');
  });

  thumbnail.addEventListener('mouseleave', function() {

    mainImages.forEach(img => img.classList.remove('active'));
    document.getElementById('mainImage1').classList.add('active');
  });
});










document.querySelector('.top__link').addEventListener('click', () => {
    const top = document.querySelector('.header');
    document.querySelector('html, body').animate({
        scrollTop: top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

});

const setImage = (imageUrl) => {
  const imageContainer = document.querySelector('.view__item');
  imageContainer.classList.remove('hidden');

  const imageSet = document.querySelector('.view__item--image');
  imageSet.src = imageUrl;
  
  imageContainer.addEventListener('click', e => {
    if(e.target !== imageSet) {
      imageContainer.classList.add('hidden');
    }
  });
}

const images = document.querySelectorAll('.gallery img');
images.forEach((image) => {
  image.addEventListener('click', (e) => setImage(e.target.attributes.src.nodeValue));
})


window.addEventListener('load', () => {
  document.querySelector('.container').classList.remove('hidden');  
});

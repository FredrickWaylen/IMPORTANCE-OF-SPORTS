document.addEventListener("DOMContentLoaded", function() {
  const images = ["IMG_5458.jpeg", "IMG_5459.jpeg", "IMG_5460.jpeg", "IMG_5461.jpeg", "IMG_5463.jpeg", "IMG_5464.jpeg", "IMG_5465.jpeg", "IMG_5466.jpeg"]; // Add more image URLs as needed
  let currentIndex = 0;
  const imgElement = document.querySelector('.current-image');

  function changeImage() {
    imgElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Reset index to 0 if it reaches the end
  }

  setInterval(changeImage, 2000); // Change image every 3 seconds
});

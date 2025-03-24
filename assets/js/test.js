// Get the modal
const modal = document.getElementById('image-modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const modalImg = document.getElementById('modal-content');
const imageIcons = document.querySelectorAll('.single-explore-image-icon');

// Track the current image index
let currentImageIndex = 0;

// Function to show the modal with a specific image
const showModal = (index) => {
     modal.style.display = 'block';
     modalImg.src = imageIcons[index].src;
     currentImageIndex = index;
};

// Add click event to each image icon to open the modal
imageIcons.forEach((icon, index) => {
     icon.addEventListener('click', () => {
          document.getElementById("single-explore-img")
     });
});

// Get the <span> element that closes the modal
const exit = document.querySelector('.close-modal');

// When the user clicks on <span> (x), close the modal
exit.addEventListener('click', () => {
     modal.style.display = 'none';
});

function openModal() {
     modal.style.display = 'block';
}

// Navigate through images
const showImage = (index) => {
     modalImg.src = imageIcons[index].src;
};

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Navigate to the previous image
prevButton.addEventListener('click', () => {
     currentImageIndex = (currentImageIndex === 0) ? imageIcons.length - 1 : currentImageIndex - 1;
     showImage(currentImageIndex);
});

// Navigate to the next image
nextButton.addEventListener('click', () => {
     currentImageIndex = (currentImageIndex === imageIcons.length - 1) ? 0 : currentImageIndex + 1;
     showImage(currentImageIndex);
});

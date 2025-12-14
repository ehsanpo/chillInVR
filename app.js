// List of all available panorama images
const panoramas = [
  'IMG-20250818-WA0000.jpg',
  'IMG-20250818-WA0002.jpg',
  'IMG-20250915-WA0000.jpg',
  'IMG-20250915-WA0001.jpg',
  'IMG-20250915-WA0002.jpg',
  'IMG-20250915-WA0003.jpg',
  'IMG-20250915-WA0004.jpg',
  'IMG-20250915-WA0005.jpg',
  'IMG-20250915-WA0006.jpg',
  'IMG-20250915-WA0007.jpg',
  'IMG-20250915-WA0008.jpg',
  'IMG-20250915-WA0009.jpg',
  'IMG-20250915-WA0010.jpg',
  'IMG-20250915-WA0011.jpg',
  'IMG-20250915-WA0012.jpg',
  'IMG-20250915-WA0013.jpg',
  'IMG-20250915-WA0014.jpg',
  'IMG-20250915-WA0015.jpg',
  'IMG-20250915-WA0016.jpg',
  'IMG-20250915-WA0017.jpg',
  'IMG-20250915-WA0018.jpg',
  'IMG-20250915-WA0019.jpg',
  'IMG-20250915-WA0020.jpg',
  'IMG-20250915-WA0021.jpg',
  'IMG-20250915-WA0022.jpg',
  'IMG-20250915-WA0023.jpg',
  'IMG-20250915-WA0024.jpg',
  'IMG-20250915-WA0025.jpg',
  'IMG-20250915-WA0026.jpg',
  'IMG-20250915-WA0027.jpg',
  'IMG-20250915-WA0028.jpg',
  'IMG-20250915-WA0029.jpg',
  'IMG-20250915-WA0030.jpg',
  'IMG-20250915-WA0031.jpg',
  'IMG-20250915-WA0032.jpg',
  'IMG-20251101-WA0006.jpg',
];

let currentIndex = 0;
let panoramaElement, imageCounter, prevBtn, nextBtn;

// Function to update the panorama
function updatePanorama() {
  const imagePath = `static_assets/${panoramas[currentIndex]}`;
  console.log('Changing to:', imagePath);
  panoramaElement.setAttribute('src', imagePath);
  imageCounter.textContent = `Image ${currentIndex + 1} of ${panoramas.length}`;
}

// Navigate to next panorama
function nextPanorama() {
  currentIndex = (currentIndex + 1) % panoramas.length;
  console.log('Next clicked, new index:', currentIndex);
  updatePanorama();
}

// Navigate to previous panorama
function previousPanorama() {
  currentIndex = (currentIndex - 1 + panoramas.length) % panoramas.length;
  console.log('Previous clicked, new index:', currentIndex);
  updatePanorama();
}

// Initialize immediately since script is at the end of body
console.log('Initializing ChillInVR...');

// Get DOM elements
panoramaElement = document.querySelector('#panorama');
imageCounter = document.getElementById('image-counter');
prevBtn = document.getElementById('prevBtn');
nextBtn = document.getElementById('nextBtn');

console.log('Elements found:', {
  panorama: !!panoramaElement,
  counter: !!imageCounter,
  prevBtn: !!prevBtn,
  nextBtn: !!nextBtn
});

// Event listeners for buttons
if (prevBtn) {
  prevBtn.addEventListener('click', previousPanorama);
  console.log('Previous button listener added');
}
if (nextBtn) {
  nextBtn.addEventListener('click', nextPanorama);
  console.log('Next button listener added');
}

// Keyboard controls
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'Right') {
    nextPanorama();
  } else if (event.key === 'ArrowLeft' || event.key === 'Left') {
    previousPanorama();
  }
});

console.log('ChillInVR loaded with', panoramas.length, 'panoramas');

function toggleMenu() {
  var navbar = document.getElementById("mobile-menu");
  navbar.classList.toggle("open");
  console.log("aa")
}
let currentSlide = 0;

function changeSlide(direction) {
  const carouselInner = document.querySelector(".carousel-inner");
  const totalSlides = document.querySelectorAll(".carousel-item").length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const currentIndex = Array.from(
    document.querySelectorAll(".carousel-item")
  ).indexOf(document.querySelector(".carousel-item.active"));
  document
    .querySelector(".carousel-item.active")
    ?.classList.remove("active", "zoom-in");

  // Get the current active slide index

  // Calculate the next slide index
  const nextIndex =
    (currentIndex +
      direction +
      document.querySelectorAll(".carousel-item").length) %
    document.querySelectorAll(".carousel-item").length;

  // Add the "active" class to the next slide
  document
    .querySelectorAll(".carousel-item")
    [nextIndex].classList.add("active", "zoom-in");

  const translateValue = -currentSlide * 100 + "%";
  carouselInner.style.transform = "translateX(" + translateValue + ")";
}

function goToSlide(slideNumber){
  document
    .querySelector(".carousel-item.active")
    ?.classList.remove("active", "zoom-in");
    document
    .querySelectorAll(".carousel-item")
    [slideNumber].classList.add("active", "zoom-in");
}

function startAutoSlide() {
  intervalId = setInterval(function () {
    changeSlide(1);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}
// startAutoSlide();
document
  .querySelector(".carousel")
  .addEventListener("mouseover", stopAutoSlide);
document
  .querySelector(".carousel")
  .addEventListener("mouseover", startAutoSlide);

function startCountAnimation(targetElement, targetCount, interval) {
  let counts = setInterval(updated, interval);
  let upto = 0;

  function updated() {
    let count = document.getElementById(targetElement);
    count.innerHTML = ++upto;

    if (upto === targetCount) {
      clearInterval(counts);
    }
  }
}

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the counting animation for distance1
      startCountAnimation("distance1", 25, 70);

      // Start the counting animation for distance2
      startCountAnimation("distance2", 6, 150);

      // Start the counting animation for distance3
      startCountAnimation("distance3", 1, 3000);

      startCountAnimation("totalacres", 27, 100);
      startCountAnimation("foodforest", 12, 200);
      startCountAnimation("totalcommunity", 15, 120);

      observer.disconnect(); // Stop observing once the counting animations start
    }
  });
}

// Create an observer to watch for the div elements
const observer = new IntersectionObserver(handleIntersection);
let targetElements = document.querySelectorAll(".distance", "totalSaarang");
targetElements.forEach((element) => observer.observe(element));

function openYouTube() {
  var videoLink = "https://www.youtube.com/embed/EYcE9KlcOts";

  // Open the YouTube video link in a new tab
  window.open(videoLink);
}


function showTab1(tabId) {
  // Hide all tabs
  var tabs = document.getElementsByClassName("planscontent");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Show the selected tab
  document.getElementById(tabId).style.display = "block";

  // Remove 'active' class from all tabs
  var tabButtons1 = document.getElementsByClassName("planstab");
  for (var i = 0; i < tabButtons1.length; i++) {
    tabButtons1[i].classList.remove("active");
  }

  // Add 'active' class to the clicked tab
  event.currentTarget.classList.add("active");
}
function showTab(tabId) {
  // Hide all tabs
  var tabs = document.getElementsByClassName("neighborhoodscontent");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Show the selected tab
  document.getElementById(tabId).style.display = "block";

  // Remove 'active' class from all tabs
  var tabButtons = document.getElementsByClassName("neighborhoodstab");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Add 'active' class to the clicked tab
  event.currentTarget.classList.add("active");
}

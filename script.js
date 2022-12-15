
// INIT COMPORTAMIENTO NAVBAR
const nav = document.querySelector("nav");
const navHeight = 70;
// the point the scroll starts from (in px)
let lastScrollY = 0;
// how far to scroll (in px) before triggering
const delta = 30;

// function to run on scrolling
function scrolled() {
  let sy = window.scrollY;
  // only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("-top-20");
    } 
    // scroll up -> show nav bar
    else if (sy < lastScrollY) {
      nav.classList.remove("-top-20");
    }
   // update current scroll point
   lastScrollY = sy 
  }
}

// Add event listener & debounce so not constantly checking for scroll
let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)

// END COMPORTAMIENTO NAVBAR

// INIT INTERSECTION API BEHAVIOUR
// Get all the elements you want to show on scroll
const targets = document.querySelectorAll(".js-animate-on-scroll");

// Callback for IntersectionObserver
const callback = function(entries) {
  entries.forEach(entry => {
    const animationType = entry.target.dataset.animateType;
    const repeatAnim = entry.target.dataset.repeatAnim;
    // Is the element in the viewport?
    if (entry.isIntersecting) {
        entry.target.classList.add(animationType);
    } else {
      if (repeatAnim === "true") {
      // Otherwise remove the fadein class
      entry.target.classList.remove(animationType);
      }
    }
  });
};

// Set up a new observer
const observer = new IntersectionObserver(callback);

// Loop through each of the target
targets.forEach(function(target) {
  // Hide the element
  //target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});

// END INTERSECTION API BEHAVIOUR
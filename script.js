// ... (Previous JavaScript code) ...

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }
  
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
var textPopup = document.querySelector(".text-popup");

window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    textPopup.classList.add("active");
  } else {
    textPopup.classList.remove("active");
  }
});
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
const floatingIcon = document.querySelector('#floating-icon');

floatingIcon.style.position = 'fixed';
floatingIcon.style.top = '100px';
floatingIcon.style.left = '100px';
floatingIcon.style.width = '50px';
floatingIcon.style.height = '50px';
floatingIcon.style.borderRadius = '50%';
floatingIcon.style.backgroundColor = '#fff';
floatingIcon.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';

// Make the icon disappear when the user scrolls down the page
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    floatingIcon.style.display = 'none';
  } else {
    floatingIcon.style.display = 'block';
  }
});


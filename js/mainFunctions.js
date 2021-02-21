var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var line = document.getElementsByClassName("line");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < line.length; i++) {
    line[i].className = line[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  line[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// hamburger menu button
var burgerButton = document.querySelector('.burger-menu');
// nav drop down menu
var mobileMenuToggle = document.getElementById('ul-selector');
// event listener activates upon click event
window.addEventListener('click', function(e) {
    var clickTarget = e.target;
// if the burger button is clicked, open the dropdown, else close it
    if (clickTarget.classList.contains('burger-menu') || clickTarget.parentElement.classList.contains('burger-menu')) {
        burgerButton.classList.toggle('toggle');
        mobileMenuToggle.classList.toggle('ul-display');
    } else {
        burgerButton.classList.remove('toggle');
        mobileMenuToggle.classList.remove('ul-display');
    }
})
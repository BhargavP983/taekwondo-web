window.addEventListener("scroll", function(){
    var parallax = document.querySelector(".parallax-background");
    var scrolled = window.pageYOffset;
    parallax.style.top = -(scrolled * 0.5) + "px";
  });
  
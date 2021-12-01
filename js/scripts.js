//slider initialization
$(".home-slider").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  autoplayHoverPause: true,
  items: 1,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
});

//hamburger menu
const btnHamburger = document.querySelector("#btnHamburger");
btnHamburger.addEventListener("click", function () {
  console.log("test");
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
  } else {
    btnHamburger.classList.add("open");
  }
});


let accordian_header = document.querySelectorAll(".accordian_header");
let hero_navbar_right = document.querySelector(".hero_navbar_right")

accordian_header.forEach((header) => {
  header.addEventListener("click", function () {
    header.classList.toggle("active_accordian");
  });
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 100,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



function openNav(){

  hero_navbar_right.classList.add("open")

}
function closeNav(){

  hero_navbar_right.classList.remove("open")

}
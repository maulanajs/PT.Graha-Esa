window.addEventListener("load", function() {
  // Sembunyikan loader setelah semua konten dimuat
  if (document.getElementById("loader")) {
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
    }, 1500); // Menunggu 1.5 detik sebelum menghilangkan loader
  }
});

window.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

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

  // Tambahkan tombol hamburger ke navbar
  const navbar = document.querySelector('.navbar');
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  navbar.appendChild(hamburger);

  // Semua fungsionalitas hamburger menu digabung di sini
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle menu saat hamburger diklik
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Mencegah event bubbling
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Tutup menu saat klik di luar
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Tutup menu saat nav links diklik
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});


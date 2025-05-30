// Hero slider
const heroSliderEl = document.querySelector(".hero__slider");
if (heroSliderEl) {
  new Swiper(heroSliderEl, {
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // ≤414px
      0: {
        slidesPerView: 1,
        navigation: false,
        pagination: { type: "bullets" }
      },
      // 415–768px
      415: {
        slidesPerView: 1,
        navigation: false,
      },
      // 769–1024px
      769: {
        slidesPerView: 1,
      },
      // 1025–1440px
      1025: {
        slidesPerView: 1,
      },
      // >1440px
      1441: {
        slidesPerView: 1,
      }
    }
  });
}




// Reviews slider (тільки якщо є на сторінці)
const reviewsSliderEl = document.querySelector(".reviews__slider");
if (reviewsSliderEl) {
  new Swiper(reviewsSliderEl, {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
}

// Animated counters (тільки якщо є на сторінці)
const counters = document.querySelectorAll(".stats__value");
let started = false;

function animateCounters() {
  if (started) return;

  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    counters.forEach((counter) => {
      const target = +counter.dataset.target;
      const duration = 1500;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(target * progress);

        counter.textContent = currentValue;
        counter.classList.add("active");

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          let suffix = "+";
          if (target === 24) suffix = "/7";
          if (target === 95) suffix = "%";
          counter.textContent = target + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    });

    started = true;
  }
}

window.addEventListener("scroll", animateCounters);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".callback__form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Створення попапа
    const popup = document.createElement("div");
    popup.classList.add("callback__popup");
    popup.innerHTML = `
      <h3 class="callback__popup-title">Дякуємо!</h3>
      <p class="callback__popup-text">Наш менеджер зв’яжеться з вами протягом 5 хвилин.</p>
    `;
    document.body.appendChild(popup);

    // Автоматичне зникнення через 5 секунд
    setTimeout(() => {
      popup.remove();
    }, 5000);

    // Очищення форми
    form.reset();
  });
});

const burger     = document.querySelector('.menu__burger');
const mobileMenu = document.querySelector('.menu__mobile');
const body       = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('menu__mobile--active');
  body.classList.toggle('menu-open');
});






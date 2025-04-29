const swiper = new Swiper(".hero__slider", {
  loop: true,
  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6000, // довша пауза між слайдами
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1200, // повільніший перехід (час анімації в мілісекундах)
});

const counters = document.querySelectorAll(".stats__value");
let started = false;

function animateCounters() {
  if (started) return;

  const statsSection = document.querySelector(".stats");
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

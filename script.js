const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
    //   el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

on:{
        slidechange: () => {
            setTimeout(() => {
                const activeSlide = document.querySelector('.swiper-slide-active');
                const bg = activeSlide.getAttribute('.data-bg');
                const header = document.querySelector('.header');
                if  (header && bg) {
                    header.style.background = bg;
                }
            }, 0);
        }
    }

  });
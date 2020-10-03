// slider

const heroSlider = new Swiper('.slider-hero', {
  slidesPerView: 1,

  pagination: {
    el: '.slider-pag',
    clickable: true
  },

  navigation: {
    nextEl: '.slider-arrows__arrow_next',
    prevEl: '.slider-arrows__arrow_prev',
  },
})

const cooperationsSlider = new Swiper('.cooperation__slider', {
  slidesPerView: 2,
  loop: true,

  navigation: {
    nextEl: '.cooperation__slider-arrow_next',
    prevEl: '.cooperation__slider-arrow_prev',
  },
  breakpoints: {
    // when window width is >= 640px
    1900: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 4,
    },
    420: {
      slidesPerView: 3,
    }
  }
})

const worksSlider = new Swiper('.works-portfolio__slider', {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.works-portfolio__arrow_next',
    prevEl: '.works-portfolio__arrow_prev',
  },
  // breakpoints: {
  //   // when window width is >= 640px
  //   1900: {
  //     slidesPerView: 6,
  //   },
  //   992: {
  //     slidesPerView: 4,
  //   },
  //   420: {
  //     slidesPerView: 3,
  //   }
  // }
})

const handlesSlider = document.querySelector('.filter-portfolio__cost');
const minNum = document.querySelector('#value-min-num')
const maxNum = document.querySelector('#value-max-num')

noUiSlider.create(handlesSlider, {
  start: [25000, 2000000],
  range: {
    'min': [25000],
    'max': [2000000]
  },
  format: wNumb({
    decimals: 0
  }),
  connect: true,
});

handlesSlider.noUiSlider.on('update', function (values, handle) {
  minNum.textContent = values[0] + '₽'
  maxNum.textContent = values[1] + '₽'
});

// Dropdown

const filterSelect = document.querySelectorAll('.filter-select')

filterSelect.forEach(select => {

  select.addEventListener('click', function (e) {
    const target = e.target

    if (e.currentTarget.classList.contains('filter-select')) {
      this.classList.add('_active')
    }

  })

})

// Mob menu

const btnHam = document.querySelector('.btn-burger')
const headerNav = document.querySelector('.header__nav')

btnHam.addEventListener('click', function() {
  this.classList.toggle('active')

  headerNav.classList.toggle('active')
})
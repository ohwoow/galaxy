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
  const filterSelectHeader = select.querySelector('.filter-select__header')
  const filterSelectItem = select.querySelectorAll('.filter-select__item')


  filterSelectHeader.addEventListener('click', (e) => {
    select.classList.add('_active')
  })

  filterSelectItem.forEach(item => {
    item.addEventListener('click', () => {
      select.classList.remove('_active')
    })
  })
})

// Mob menu

const btnHam = document.querySelectorAll('.btn-burger')
const headerNav = document.querySelectorAll('.header__nav')

btnHam.forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active')
  
    headerNav.forEach(item => {
      item.classList.toggle('active')
    })
  })
})

// Menu on desctop

window.addEventListener('scroll', () => {
  const headerScroll = document.querySelector('.header_scroll')

  if (scrollY > 300) {
    headerScroll.classList.add('active')
  } else {
    headerScroll.classList.remove('active')
  }
})

window.addEventListener('resize', () => {
  const headerScroll = document.querySelector('.header_scroll')
  if (innerWidth <= 992) {
    headerScroll.remove()
  }
})

// Modal

const contactsBtn = document.querySelectorAll('.contacts-hero__btn')
const modalFeedback = document.querySelector('.modal-feedback')
const modalPolitics = document.querySelector('.modal-politics')
const modalCloseBtn = document.querySelectorAll('.modal__close')
const politics = document.querySelector('.form-feedback__checkbox-text a')



function modalClose() {
  modalFeedback.classList.remove('active')
  modalPolitics.classList.remove('active')
}

contactsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modalFeedback.classList.add('active')
  })
})

modalCloseBtn.forEach(btn => {
  btn.addEventListener('click', modalClose)
})

politics.addEventListener('click', (evt) => {
  evt.preventDefault()
  modalPolitics.classList.add('active')
})



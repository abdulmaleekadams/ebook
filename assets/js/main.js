/*=============== SEARCH ===============*/
const searchBtn = document.getElementById('searchBtn'),
  searchClose = document.getElementById('searchClose'),
  searchContent = document.getElementById('searchContent');

const showUI = (ui, classToAdd) => {
  ui.classList.add(classToAdd);
};

const hideUI = (ui, classToAdd) => {
  ui.classList.remove(classToAdd);
};

/*=============== MENU SHOW ===============*/
// Validate if constant exist
if (searchBtn) {
  searchBtn.addEventListener('click', () =>
    showUI(searchContent, 'showSearch')
  );
}

/*=============== MENU HIDDEN ===============*/
if (searchClose) {
  searchClose.addEventListener('click', () =>
    hideUI(searchContent, 'showSearch')
  );
}

/*=============== LOGIN ===============*/
const userLoginBtn = document.getElementById('loginBtn'),
  loginCloseBtn = document.getElementById('loginClose'),
  loginContent = document.getElementById('loginContent');

/*=============== LOGIN SHOW ===============*/
// Validate if constant exist
if (userLoginBtn) {
  userLoginBtn.addEventListener('click', () =>
    showUI(loginContent, 'showSearch')
  );
}

/*=============== LOGIN HIDDEN ===============*/
if (loginCloseBtn) {
  loginCloseBtn.addEventListener('click', () =>
    hideUI(loginContent, 'showSearch')
  );
}

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >= 50
    ? header.classList.add('scrollHeader')
    : header.classList.remove('scrollHeader');
};

window.addEventListener('scroll', scrollHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.homeSwiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoint: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featuredSwiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoint: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});
/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.newSwiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  breakpoint: {
    1150: {
      slidesPerView: 3,
    },
  },
});
/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonialSwiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakpoint: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const showScrollup = () => {
  const scrollup = document.getElementById('scrollup');

  this.scrollY >= 350
    ? scrollup.classList.add('showScrollup')
    : scrollup.classList.remove('showScrollup');
};

window.addEventListener('scroll', showScrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = this.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector(`.navMenu a[href*=${sectionId}]`);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('activeLink');
    } else {
      sectionClass.classList.remove('activeLink');
    }
  });
};
window.addEventListener('scroll', scrollActive);
window.addEventListener('load', scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('themeBtn');
const darkTheme = 'darkTheme';
const iconTheme = 'ri-sun-line';

// previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line';

// validate if the user previously chose a theme
if (selectedTheme) {
  // Activate or deactivate theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  // Add  or remove dark / icone theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  dealy: 400,
  reset: false,
});

sr.reveal(
  `.homeData, .featuredContainer, .newContainer, .joinData, .testimonialContainer, .footer`
);
sr.reveal(`.homeImages`, { delay: 600 });
sr.reveal(`.servicesCard`, { interval: 1000 });
sr.reveal(`.discountData`, { origin: 'left' });
sr.reveal(`.discountImages`, { origin: 'right' });

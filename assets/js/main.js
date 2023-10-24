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

/*=============== HOME SWIPER ===============*/

/*=============== FEATURED SWIPER ===============*/

/*=============== NEW SWIPER ===============*/

/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
};

// add click event to all modal items
testimonialsItem.forEach(function (item) {
  item.addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");

    if (modalImg && avatar) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }
    if (modalTitle && title) {
      modalTitle.textContent = title.textContent;
    }
    if (modalText && text) {
      modalText.innerHTML = typeof DOMPurify !== "undefined"
        ? DOMPurify.sanitize(text.innerHTML, {
            ADD_TAGS: ['ion-icon'],
            ADD_ATTR: ['name', 'aria-hidden', 'role', 'aria-label']
          })
        : text.innerHTML;
    }

    testimonialsModalFunc();
  });
});

// add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Set form action from config
if (form && typeof SITE_CONFIG !== "undefined") {
  form.action = SITE_CONFIG.FORMSPREE_URL;
}

// add event to all form input field
formInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    if (form && form.checkValidity()) {
      if (formBtn) formBtn.removeAttribute("disabled");
    } else {
      if (formBtn) formBtn.setAttribute("disabled", "");
    }
  });
});

// theme toggle
const themeBtn = document.querySelector('[data-theme-btn]');
if (themeBtn) {
  themeBtn.addEventListener('click', function () {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    document.body.classList.add('theme-transitioning');
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    setTimeout(function () { document.body.classList.remove('theme-transitioning'); }, 320);
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// lazy-load Google Maps iframe only when Contact tab is first activated
function loadMapIfNeeded(targetPage) {
  if (targetPage === 'contact') {
    const mapIframe = document.querySelector('[data-map-iframe]');
    if (mapIframe && !mapIframe.src) {
      mapIframe.src = mapIframe.dataset.src;
    }
  }
}

// add event to all nav link
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const targetPage = this.dataset.navTarget || this.innerHTML.toLowerCase();
    loadMapIfNeeded(targetPage);

    pages.forEach(function (page) {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach(function (navLink) {
      const navTarget = navLink.dataset.navTarget || navLink.innerHTML.toLowerCase();
      if (navTarget === targetPage) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});

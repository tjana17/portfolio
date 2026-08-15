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
const modalAvatar = document.querySelector("[data-modal-avatar]");
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

    if (modalAvatar && avatar) {
      modalAvatar.textContent = avatar.dataset.initials || "";
      modalAvatar.setAttribute("aria-label", avatar.getAttribute("aria-label") || "Testimonial author");
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

// the page names that can appear in the URL, e.g. ["about", "resume", ...]
const pageNames = Array.prototype.map.call(pages, function (page) {
  return page.dataset.page;
});

// the page a nav control points at
function targetOf(link) {
  return (link.dataset.navTarget || link.textContent).trim().toLowerCase();
}

// read the page name out of the URL, falling back to the first page
function pageFromHash() {
  const name = decodeURIComponent(location.hash.replace(/^#/, "")).toLowerCase();
  return pageNames.indexOf(name) !== -1 ? name : pageNames[0];
}

// show one page and sync the nav to match
function activatePage(targetPage) {
  loadMapIfNeeded(targetPage);

  pages.forEach(function (page) {
    page.classList.toggle("active", page.dataset.page === targetPage);
  });

  navigationLinks.forEach(function (navLink) {
    const isCurrent = targetOf(navLink) === targetPage;
    navLink.classList.toggle("active", isCurrent);
    // only the real navbar entries describe "where you are"
    if (navLink.closest(".navbar")) {
      if (isCurrent) {
        navLink.setAttribute("aria-current", "page");
      } else {
        navLink.removeAttribute("aria-current");
      }
    }
  });
}

// add event to all nav link
navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const targetPage = targetOf(this);
    if (pageNames.indexOf(targetPage) === -1) return;

    activatePage(targetPage);

    // give every tab its own URL so it can be linked, bookmarked and gone back to
    if (location.hash.replace(/^#/, "") !== targetPage) {
      history.pushState({ page: targetPage }, "", "#" + targetPage);
    }

    window.scrollTo(0, 0);
  });
});

// back/forward between tabs
window.addEventListener("popstate", function () {
  activatePage(pageFromHash());
});

// honour a deep link such as /#resume on first load
if (location.hash) activatePage(pageFromHash());

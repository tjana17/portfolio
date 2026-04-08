'use strict';

// Project rendering and filter logic
// Requires: projects-data.js to be loaded first (defines `projects` array)

function openModal(projectId) {
  var project = projects.find(function (p) { return p.id === projectId; });
  if (!project) return;

  var titleEl = document.getElementById("modalTitle");
  var descEl = document.getElementById("modalDescription");
  var featEl = document.getElementById("modalKeyFeatures");
  var imgEl = document.getElementById("modalImage");
  var linksEl = document.getElementById("modalLinks");
  var modalEl = document.getElementById("projectModal");

  if (titleEl) titleEl.textContent = project.title;
  if (descEl) descEl.innerHTML = DOMPurify.sanitize(project.description);
  if (featEl) featEl.innerHTML = DOMPurify.sanitize(project.keyfeatures);
  if (imgEl) {
    imgEl.src = project.image;
    imgEl.alt = project.title + ' project screenshot';
  }

  if (linksEl) {
    linksEl.innerHTML = "";
    project.links.forEach(function (link) {
      var a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link.label;
      linksEl.appendChild(a);
    });
  }

  if (modalEl) modalEl.style.display = "flex";
}

function closeModal() {
  var modalEl = document.getElementById("projectModal");
  if (modalEl) modalEl.style.display = "none";
}

// Attach close button listener
document.addEventListener("DOMContentLoaded", function () {
  var closeBtn = document.getElementById("projectModalCloseBtn");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
});

// Projects Cards Grid
document.addEventListener("DOMContentLoaded", function () {
  try {
    var projectListEl = document.getElementById("projectList");
    if (!projectListEl) {
      console.error("Project List Element not found!");
      return;
    }

    // Render Projects Dynamically
    projects.forEach(function (project) {
      var li = document.createElement("li");
      li.className = "project-item active";

      // Determine category for filtering
      var filterCategory = "mobile apps";
      if (project.category && project.category.toLowerCase().includes("web")) {
        filterCategory = "web development";
      } else if (project.links && project.links.some(function (link) { return link.url.includes("github.com"); })) {
        filterCategory = "github repos";
      }

      li.setAttribute("data-filter-item", filterCategory);
      li.setAttribute("data-category", filterCategory);

      var link = document.createElement("a");
      link.href = "#";
      link.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(project.id);
      });

      var figure = document.createElement('figure');
      figure.className = 'project-img';

      var iconBox = document.createElement('div');
      iconBox.className = 'project-item-icon-box';
      iconBox.innerHTML = '<ion-icon name="eye-outline" aria-hidden="true"></ion-icon>';

      var img = document.createElement('img');
      img.alt = project.title;
      img.loading = 'lazy';
      img.addEventListener('load', function () { figure.classList.add('loaded'); });
      img.addEventListener('error', function () { figure.classList.add('loaded'); });
      img.src = project.image;

      figure.appendChild(iconBox);
      figure.appendChild(img);

      var h3 = document.createElement('h3');
      h3.className = 'project-title shimmer-text';
      h3.textContent = project.title;

      var p = document.createElement('p');
      p.className = 'project-category';
      p.textContent = project.category;

      link.appendChild(figure);
      link.appendChild(h3);
      link.appendChild(p);

      li.appendChild(link);
      projectListEl.appendChild(li);
    });

    // Filter Logic — reuse elements already queried in script.js
    var filterItems = document.querySelectorAll("[data-filter-item]");
    var filterBtns = document.querySelectorAll("[data-filter-btn]");
    var selectValueEl = document.querySelector("[data-select-value]");
    var selectEl = document.querySelector("[data-select]");

    var filterFunc = function (selectedValue) {
      filterItems.forEach(function (item) {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    // Filter button items for large screen
    var lastClickedBtn = filterBtns[0];

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var selectedValue = this.innerText.toLowerCase();
        if (selectValueEl) selectValueEl.innerText = this.innerText;
        filterFunc(selectedValue);

        if (lastClickedBtn) lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    });

    // Custom Select Logic (Mobile)
    if (selectEl) {
      var selectItemEls = document.querySelectorAll("[data-select-item]");

      selectItemEls.forEach(function (item) {
        item.addEventListener("click", function () {
          var selectedValue = this.innerText.toLowerCase();
          if (selectValueEl) selectValueEl.innerText = this.innerText;
          elementToggleFunc(selectEl);
          filterFunc(selectedValue);
        });
      });
    }
  } catch (error) {
    console.error("Error in projects.js:", error);
  }
});

'use strict';

// Skills data
const skills = [
  { name: "Swift", level: 85 },
  { name: "SwiftUI", level: 70 },
  { name: "Android Java", level: 60 },
  { name: "Kotlin", level: 50 },
  { name: "Objective-C", level: 80 },
  { name: "HTML5 & CSS3", level: 85 },
  { name: "Wordpress & Shopify", level: 70 },
];

const skillsContainer = document.getElementById("skills-container");
if (!skillsContainer) { console.warn("Skills container not found"); }

// Render skills dynamically
if (skillsContainer) skills.forEach((skill, index) => {
  const li = document.createElement("li");
  li.classList.add("skills-item");

  li.innerHTML = `
    <div class="title-wrapper">
      <h5 class="h5">${skill.name}</h5>
      <data value="${skill.level}" class="skill-counter">0%</data>
    </div>
    <div class="skill-progress-bg">
      <div class="skill-progress-fill"
           data-level="${skill.level}"
           data-delay="${index * 200}"
           data-animated="false">
      </div>
    </div>
  `;

  skillsContainer.appendChild(li);
});

// Animate skills using IntersectionObserver
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const fills = entry.target.querySelectorAll(".skill-progress-fill");
      fills.forEach((fill) => {
        if (fill.getAttribute("data-animated") === "true") return;

        const level = parseInt(fill.getAttribute("data-level"), 10);
        const delay = parseInt(fill.getAttribute("data-delay"), 10);

        fill.setAttribute("data-animated", "true");

        setTimeout(() => {
          fill.style.width = level + "%";

          const counter =
            fill.parentElement.previousElementSibling.querySelector(
              ".skill-counter"
            );
          let current = 0;
          const duration = 1500;
          const steps = Math.ceil(duration / 30);
          const increment = level / steps;

          const interval = setInterval(() => {
            current += increment;
            if (current >= level) {
              current = level;
              clearInterval(interval);
            }
            counter.textContent = Math.round(current) + "%";
          }, 30);
        }, delay);
      });

      skillsObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

if (skillsContainer) {
  skillsObserver.observe(skillsContainer);
}

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

// Render skills dynamically
skills.forEach((skill, index) => {
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

// Animate when in view with stagger + counter
function animateSkills() {
  const fills = document.querySelectorAll(".skill-progress-fill");

  fills.forEach(fill => {
    const level = parseInt(fill.getAttribute("data-level"), 10);
    const delay = parseInt(fill.getAttribute("data-delay"), 10);
    const alreadyAnimated = fill.getAttribute("data-animated") === "true";

    const rect = fill.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible && !alreadyAnimated) {
      fill.setAttribute("data-animated", "true"); // mark as done

      setTimeout(() => {
        // Animate bar fill
        fill.style.width = level + "%";

        // Animate number counter
        const counter = fill.parentElement.previousElementSibling.querySelector(".skill-counter");
        let current = 0;
        const duration = 1500; // match CSS transition (1.5s)
        const steps = Math.ceil(duration / 30); // ~30 updates
        const increment = level / steps;

        const interval = setInterval(() => {
          current += increment;
          if (current >= level) {
            current = level;
            clearInterval(interval);
          }
          counter.textContent = Math.round(current) + "%";
        }, 30);
      }, delay); // stagger delay
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

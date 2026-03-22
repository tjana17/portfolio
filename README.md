<div align="center">

# Janarthanan Kannan — Portfolio

**Tech Lead & Mobile Engineer**

[![Live Site](https://img.shields.io/badge/Live_Site-tjana17.github.io-orange?style=for-the-badge&logo=github)](https://tjana17.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/janarthanan-kannan/)
[![GitHub](https://img.shields.io/badge/GitHub-tjana17-181717?style=for-the-badge&logo=github)](https://github.com/tjana17)

A modern, responsive developer portfolio showcasing **10+ years** of experience building mobile and web applications across fintech, e-commerce, automotive, and lifestyle domains.

[View Live Portfolio](https://tjana17.github.io/portfolio/) · [Download Resume](https://drive.google.com/file/d/1L0IDvmhr6-0WxIiXMhxidK5g_isT9D6m/view)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Showcase](#project-showcase)
- [Skills](#skills)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Performance & Best Practices](#performance--best-practices)
- [License](#license)
- [Contact](#contact)

---

## About

This portfolio is a fully responsive, single-page application built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools. It features a dark-themed design with smooth animations, dynamic content rendering, and a modular codebase.

### Highlights

- **36 projects** showcased across Mobile Apps, Web Development, and Open-Source
- **15+ published apps** on the App Store and Google Play with **100K+ downloads**
- **4 testimonials** from industry leaders and clients
- **2 technical blog posts** on iOS architecture and Firebase
- **Integrated contact form** powered by Formspree
- **SEO-optimized** with JSON-LD structured data, Open Graph, and Twitter Cards

---

## Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Fully adaptive layout from mobile (320px) to desktop (1400px+) |
| **Dark Theme** | Elegant dark UI with gold accent gradients and smooth transitions |
| **Dynamic Content** | Projects, skills, and blogs rendered dynamically via JavaScript |
| **Project Modals** | Detailed modal dialogs with descriptions, key features, and links |
| **Blog System** | Blog posts with external HTML content loading and modal reader |
| **Skill Animations** | Animated progress bars using IntersectionObserver API |
| **Portfolio Filters** | Filter projects by category (Mobile Apps, GitHub Repos, Web Development) |
| **Contact Form** | Functional form with validation, honeypot spam filter, and Formspree integration |
| **Google Maps** | Embedded interactive map showing location |
| **Testimonial Carousel** | Scrollable testimonial cards with modal detail view and star ratings |
| **Shimmer Effects** | Subtle text and avatar shimmer animations on hover |
| **Accessibility** | ARIA labels, semantic HTML, screen-reader support, keyboard navigation |

---

## Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Markup** | HTML5, Semantic Elements, JSON-LD |
| **Styling** | CSS3, Custom Properties, Flexbox, Grid, Media Queries |
| **Scripting** | Vanilla JavaScript (ES6+), Fetch API, IntersectionObserver |
| **Icons** | [Ionicons v7](https://ionic.io/ionicons) |
| **Fonts** | [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) |
| **Security** | [DOMPurify v3](https://github.com/cure53/DOMPurify) (XSS sanitization) |
| **Form Backend** | [Formspree](https://formspree.io/) |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |

</div>

---

## Project Showcase

### Published Mobile Applications

| App | Platform | Domain |
|-----|----------|--------|
| **CaddyTrack AI** | iOS | Golf / AI Coaching |
| **MyOJA** | iOS | IoT / Agriculture |
| **MyCitroën** | iOS & Android | Automotive / Connected Car |
| **Beezer Golf** | iOS | Golf / Scorecard |
| **Store2K** | iOS | E-Commerce / Grocery |
| **Moonshine** | iOS | Lifestyle / Nightlife |
| **My Need Finder** | iOS & Android | Utility / Location |
| **Dhamani1969** | iOS & Android | Luxury / E-Commerce |
| **Sahara Center** | iOS | Retail / Mall |
| **Canadian Specialist Hospital** | iOS & Android | Healthcare |
| **Dubai City Guide** | iOS | Tourism / Lifestyle |

### Web Development Projects

| Project | Description |
|---------|-------------|
| **Nova POS** | Modern point-of-sale system for retail |
| **New India Bazar** | E-commerce grocery platform |
| **Q PaymentZ** | Fintech digital payment solution |
| **Register Your Company** | Business registration platform |
| **UI Talents** | Designer and developer marketplace |
| **QR Generator** | Client-side QR code generator |
| **Expensify** | Web-based expense tracking app |

### Open-Source / GitHub Projects

| Project | Tech | Description |
|---------|------|-------------|
| **Expense Tracker** | SwiftUI, Firebase | Full-stack expense management |
| **JK Portfolio** | SwiftUI, Lottie, MVVM | iOS portfolio app |
| **Clinic Booking** | Swift | Healthcare scheduling app |
| **Weather App** | SwiftUI | Real-time weather forecasts |
| **Charts** | SwiftUI | Interactive data visualization |
| **Firebase Auth** | Swift, Firebase | Authentication module |

---

## Skills

```
Swift          ████████████████████░░░  85%
HTML5 & CSS3   ████████████████████░░░  85%
Objective-C    ████████████████████░░░░ 80%
SwiftUI        █████████████████░░░░░░░ 70%
WordPress      █████████████████░░░░░░░ 70%
Android Java   ██████████████░░░░░░░░░░ 60%
Kotlin         ████████████░░░░░░░░░░░░ 50%
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Any local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tjana17/portfolio.git
   cd portfolio
   ```

2. **Start a local server**
   ```bash
   # Using Python
   python3 -m http.server 8080

   # Or using Node.js
   npx serve .
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

### Configuration

Update `assets/js/config.js` to set your own Formspree endpoint:

```javascript
const SITE_CONFIG = {
  FORMSPREE_URL: "https://formspree.io/f/your-form-id",
  RESUME_URL: "https://your-resume-link.com"
};
```

---

## Project Structure

```
portfolio/
├── index.html                    # Main HTML (single-page application)
├── assets/
│   ├── css/
│   │   └── style.css             # Complete stylesheet with responsive breakpoints
│   ├── js/
│   │   ├── config.js             # Site configuration (Formspree URL, resume link)
│   │   ├── script.js             # Core functionality (navigation, modals, form)
│   │   ├── projects-data.js      # Project portfolio data (36 projects)
│   │   ├── projects.js           # Project rendering, filters, and modal logic
│   │   ├── skills.js             # Skills data and animated progress bars
│   │   └── blogs.js              # Blog data, rendering, and modal reader
│   ├── blogs/
│   │   └── *.html                # Blog post content files
│   └── images/
│       ├── my-avatar.jpeg        # Profile photo
│       ├── favicon.ico           # Site favicon
│       ├── icon-*.svg            # Service section icons
│       ├── logo-*-color.png      # Client logos
│       ├── avatar-*.png          # Testimonial avatars
│       └── projects/             # Project screenshots and images
│           └── *.jpg / *.png
└── README.md
```

---

## Deployment

This portfolio is deployed on **GitHub Pages** and auto-deploys from the `main` branch.

### Deploy Your Own

1. Fork this repository
2. Update content in `index.html`, `projects-data.js`, `blogs.js`, and `skills.js`
3. Replace images in `assets/images/`
4. Update `config.js` with your Formspree endpoint
5. Enable GitHub Pages in repository settings (Source: `main` branch)
6. Your portfolio will be live at `https://<username>.github.io/portfolio/`

---

## Performance & Best Practices

| Category | Implementation |
|----------|---------------|
| **Security** | DOMPurify sanitization on all dynamic HTML, SRI hashes on CDN scripts |
| **SEO** | JSON-LD structured data, canonical URLs, Open Graph & Twitter Cards, robots meta |
| **Accessibility** | ARIA labels, semantic HTML, `role` attributes, screen-reader friendly star ratings |
| **Performance** | Deferred script loading, lazy-loaded images, IntersectionObserver for animations |
| **Code Quality** | `'use strict'` in all JS, null-safe DOM queries, no inline event handlers |
| **Cross-Browser** | Firefox scrollbar support, webkit fallbacks, responsive breakpoints |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

<div align="center">

| Channel | Link |
|---------|------|
| **Portfolio** | [tjana17.github.io/portfolio](https://tjana17.github.io/portfolio/) |
| **Email** | [tjana17@gmail.com](mailto:tjana17@gmail.com) |
| **LinkedIn** | [janarthanan-kannan](https://www.linkedin.com/in/janarthanan-kannan/) |
| **GitHub** | [tjana17](https://github.com/tjana17) |

</div>

---

<div align="center">

**Built with passion by Janarthanan Kannan**

If you found this portfolio useful, please consider giving it a star!

</div>

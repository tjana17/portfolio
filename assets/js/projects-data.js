'use strict';

// Project Data Array
const projects = [
  {
    id: "caddytrack",
    title: "CaddyTrack AI",
    category: "iOS Application",
    description: `<p>A cutting-edge golf companion app designed to help players of all levels improve their game through intelligent insights and real-time feedback. CaddyTrack AI acts like a virtual caddy, guiding golfers with tailored recommendations and performance tracking.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                          <li><p>🎤 <strong>Voice-Assisted Coaching</strong>:<br/>Club recommendations and shot advice via an AI-powered assistant.</p></li>
                          <li><p>📊 <strong>Personalized Feedback</strong>:<br/>Real-time stance and swing adjustments using reference swings.</p></li>
                          <li><p>📍 <strong>Smart Course Insights</strong>:<br/>GPS-based guidance for distances, hazards, and green mapping.</p></li>
                          <li><p>⌚ <strong>Apple Watch Support</strong>:<br/>Quick access to shot data and guidance right from the wrist.</p></li>
                      </ul>`,
    image: "./assets/images/projects/caddytrack.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/caddytrack-ai/id6502741813" }
    ]
  },
  {
    id: "myoja",
    title: "MyOJA",
    category: "iOS Application",
    description: `<p>An <strong>IoT-powered tractor monitoring application</strong> developed to help farmers and fleet operators monitor location, performance, and maintenance in real time. Designed with reliability and scalability for agricultural needs.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📍 <strong>Real-Time GPS Tracking</strong>:<br/>Monitor tractor movement and location live.</p></li>
                        <li><p>⚙️ <strong>Performance Monitoring</strong>:<br/>Track usage hours, efficiency, and operating conditions.</p></li>
                        <li><p>🔔 <strong>Critical &amp; Service Alerts</strong>:<br/>Get notified for breakdowns or scheduled maintenance.</p></li>
                        <li><p>🛢 <strong>Diesel Level Indicator</strong>:<br/>Real-time fuel tracking to prevent downtime.</p></li>
                        <li><p>🗺 <strong>Geofencing</strong>:<br/>Define operating boundaries for better asset security.</p></li>
                        <li><p>🛠 <strong>Service History &amp; Dealer Locator</strong>:<br/>Maintain logs and quickly find authorized service providers.</p></li>
                      </ul>`,
    image: "./assets/images/projects/myoja.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/myoja/id6451094009" }
    ]
  },
  {
    id: "mycitroen",
    title: "MyCitroën",
    category: "iOS & Android Applications",
    description: `<p>A <strong>smart connected car companion app</strong> designed to provide drivers with real-time vehicle insights, remote controls, and enhanced safety features. MyCitro&euml;n seamlessly integrates with the vehicle to deliver convenience and peace of mind.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🚗 <strong>Real-Time Vehicle Info</strong>:<br/>Access fuel level, mileage, and diagnostics instantly.</p></li>
                        <li><p>🔐 <strong>Remote Controls</strong>:<br/>Lock/unlock doors, control A/C, lamps, and engine remotely.</p></li>
                        <li><p>📍 <strong>Geofencing &amp; Locator</strong>:<br/>Set virtual boundaries and locate the vehicle with ease.</p></li>
                        <li><p>⚡ <strong>Charging/Fuel Station Finder</strong>:<br/>Locate nearby EV charging or fuel stations.</p></li>
                        <li><p>🆘 <strong>Emergency SOS Alerts</strong>:<br/>Built-in safety features for emergencies.</p></li>
                        <li><p>📊 <strong>Driving Stats &amp; History</strong>:<br/>Track trips, efficiency, and service reminders.</p></li>
                      </ul>`,
    image: "./assets/images/projects/citroen.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/mycitroën-connect/id1613803195" }
    ]
  },
  {
    id: "beezer",
    title: "Beezer Golf Scorecard",
    category: "iOS Application",
    description: `<p>A <strong>next-generation golf app</strong> designed for simplicity and precision, making scorekeeping, tracking, and gameplay enhancements effortless. Beezer Golf offers advanced features to elevate the playing experience for golfers at all levels.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📝 <strong>Smart Scorecard</strong>:<br/>Automatic calculation of scores and handicaps.</p></li>
                        <li><p>🎮 <strong>Side Games &amp; 20+ Game Modes</strong>:<br/>Supports a wide range of golf formats.</p></li>
                        <li><p>📊 <strong>Game Stats &amp; Performance Tracking</strong>:<br/>Insights into individual and group play.</p></li>
                        <li><p>🎯 <strong>Rangefinder</strong>:<br/>Integrated GPS for accurate distance measurement.</p></li>
                        <li><p>💰 <strong>Bet Tracking</strong>:<br/>Manage wagers seamlessly during games.</p></li>
                        <li><p>⌚ <strong>Apple Watch Integration</strong>:<br/>Track and input scores directly from the wrist.</p></li>
                      </ul>`,
    image: "./assets/images/projects/beezer.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/beezer-golf-golf-scorecard/id1474924288" }
    ]
  },
  {
    id: "s2k",
    title: "Store2K",
    category: "iOS Application",
    description: `<p>A full-featured <strong>e-commerce grocery application</strong> developed from the ground up with a <strong>modern, scalable architecture</strong>. Designed for performance and usability, Store2K delivers a seamless shopping experience powered by <strong>in-trend mobile technologies</strong>.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🛒 <strong>Product Catalog &amp; Smart Search</strong>:<br/>Easy browsing with categorized listings and fast search.</p></li>
                        <li><p>📦 <strong>Cart &amp; Checkout</strong>:<br/>Smooth cart management and secure payment gateway integration.</p></li>
                        <li><p>🚚 <strong>Order Tracking</strong>:<br/>Real-time updates on order status and delivery.</p></li>
                        <li><p>🔔 <strong>Push Notifications</strong>:<br/>Personalized offers, order confirmations, and delivery alerts.</p></li>
                        <li><p>👥 <strong>User Profiles</strong>:<br/>Manage orders, preferences, and saved items.</p></li>
                        <li><p>📊 <strong>Scalable Architecture</strong>:<br/>Built for performance, reliability, and future enhancements.</p></li>
                      </ul>`,
    image: "./assets/images/projects/s2k.jpg",
    links: [
      { label: "Learn More", url: "https://store2k.com" }
    ]
  },
  {
    id: "moonshine",
    title: "Moonshine",
    category: "iOS Application",
    description: `<p>A modern lifestyle app crafted to connect users with exclusive nightlife experiences, events, and venues. Moonshine blends sleek design with a seamless booking and discovery system, offering curated recommendations tailored to each user.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🗺️ <strong>Event &amp; Venue Discovery</strong>:<br/>Browse curated nightlife events, lounges, and clubs.</p></li>
                        <li><p>📅 <strong>Smart Bookings</strong>:<br/>Reserve tables or event passes directly through the app.</p></li>
                        <li><p>⭐ <strong>Personalized Recommendations</strong>:<br/>AI-driven suggestions based on interests and history.</p></li>
                        <li><p>📲 <strong>Social Sharing</strong>:<br/>Invite friends and share experiences instantly.</p></li>
                      </ul>`,
    image: "./assets/images/projects/moonshine.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/ae/app/moonshine-app-free-drinks/id1204223403" }
    ]
  },
  {
    id: "mnf",
    title: "My Need Finder",
    category: "iOS & Android Applications",
    description: `<p>A utility-focused app that helps users locate essential services and stores nearby with ease. Designed with simplicity and speed in mind, My Need Finder ensures that users always find what they need&mdash;right when they need it.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📍 <strong>Location-Based Search</strong>:<br/>Find grocery stores, ATMs, pharmacies, and other essentials.</p></li>
                        <li><p>🧭 <strong>Map Integration</strong>:<br/>Seamless navigation to chosen destinations.</p></li>
                        <li><p>💾 <strong>Favorites &amp; History</strong>:<br/>Save commonly visited places for quick access.</p></li>
                        <li><p>⚡ <strong>Lightweight &amp; Fast</strong>:<br/>Optimized for speed and reliability on the go.</p></li>
                      </ul>`,
    image: "./assets/images/projects/mnf_n.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/ae/app/my-needfinder/id1335964038" }
    ]
  },
  {
    id: "dhamani",
    title: "Dhamani1969",
    category: "iOS & Android Applications",
    description: `<p>A luxury jewelry shopping app for the prestigious Dhamani 1969 brand, offering a refined digital storefront that matches its reputation for elegance and craftsmanship. The app delivers a premium user experience with exquisite product displays and concierge-level features.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>💎 <strong>Luxury Catalog</strong>:<br/>Showcase of high-end jewelry with detailed images and specifications.</p></li>
                        <li><p>🛒 <strong>Personalized Shopping</strong>:<br/>Wishlist, favorites, and recommendations tailored to the user.</p></li>
                        <li><p>🕵️ <strong>Secure Checkout</strong>:<br/>Safe, seamless transactions for peace of mind.</p></li>
                        <li><p>🌍 <strong>Global Reach</strong>:<br/>Designed to support international clients and markets.</p></li>
                      </ul>`,
    image: "./assets/images/projects/dhamani_n.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/dhamani-1969/id1314238321" }
    ]
  },
  {
    id: "cg",
    title: "Cyber Gear",
    category: "iOS & Android Applications",
    description: `<p>A corporate solutions app developed for Cyber Gear, integrating digital marketing, web development, and corporate communication services into a mobile-first experience. It serves as a professional companion tool for clients and business stakeholders.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🌐 <strong>Corporate Services Hub</strong>:<br/>Easy access to Cyber Gear&rsquo;s full range of services.</p></li>
                        <li><p>📢 <strong>News &amp; Updates</strong>:<br/>Stay informed with the latest industry and company insights.</p></li>
                        <li><p>🤝 <strong>Client Engagement</strong>:<br/>Tools to request services, proposals, and consultations.</p></li>
                        <li><p>📲 <strong>Professional Design</strong>:<br/>Streamlined UI reflecting a tech-driven brand identity.</p></li>
                      </ul>`,
    image: "./assets/images/projects/cg1.jpg",
    links: [
      { label: "Learn More", url: "https://cyber-gear.ae" }
    ]
  },
  {
    id: "sahara",
    title: "Sahara Center",
    category: "iOS Application",
    description: `<p>An official mall app for Sahara Center, designed to enhance the shopping and entertainment experience with convenient access to store information, promotions, and mall services.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🛍️ <strong>Store Directory</strong>:<br/>Easily browse and locate stores across categories.</p></li>
                        <li><p>🎟️ <strong>Offers &amp; Promotions</strong>:<br/>Stay updated on deals and seasonal sales.</p></li>
                        <li><p>📍 <strong>Interactive Map</strong>:<br/>Navigate the mall effortlessly.</p></li>
                        <li><p>🅿️ <strong>Parking Assistance</strong>:<br/>Find and remember parking spots.</p></li>
                      </ul>`,
    image: "./assets/images/projects/sahara.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/sahara-centre/id961644035?ls=1" }
    ]
  },
  {
    id: "csh",
    title: "Canadian Specialist Hospital",
    category: "iOS & Android Applications",
    description: `<p>A patient-focused healthcare app built for Canadian Specialist Hospital, offering convenient access to essential medical services and information. It simplifies the patient journey with a secure, user-friendly digital touchpoint.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🩺 <strong>Appointment Booking</strong>:<br/>Schedule doctor visits quickly and efficiently.</p></li>
                        <li><p>💊 <strong>Prescription Access</strong>:<br/>View and manage prescribed medications.</p></li>
                        <li><p>📄 <strong>Medical Records</strong>:<br/>Secure access to patient history and reports.</p></li>
                        <li><p>📍 <strong>Hospital Navigation</strong>:<br/>Interactive maps for departments and services.</p></li>
                      </ul>`,
    image: "./assets/images/projects/csh.jpg",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/canadian-specialist-hospital/id1194470390" }
    ]
  },
  {
    id: "dcg",
    title: "Dubai City Guide",
    category: "iOS Application",
    description: `<p>A comprehensive lifestyle and tourism app that helps residents and visitors discover Dubai&rsquo;s best attractions, restaurants, events, and activities. Designed to be a pocket-sized city companion for both locals and tourists.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🗺️ <strong>Attractions &amp; Landmarks</strong>:<br/>Explore must-visit places with detailed guides.</p></li>
                        <li><p>🍴 <strong>Dining &amp; Nightlife</strong>:<br/>Discover restaurants, cafes, and entertainment spots.</p></li>
                        <li><p>🎉 <strong>Events Calendar</strong>:<br/>Stay updated on concerts, festivals, and exhibitions.</p></li>
                        <li><p>🚕 <strong>Travel &amp; Navigation</strong>:<br/>Integrated directions and booking links for convenience.</p></li>
                      </ul>`,
    image: "./assets/images/projects/dcg.jpg",
    links: [
      { label: "Learn More", url: "https://www.dubaicityguide.com/" }
    ]
  },
  {
    id: "expenseTracker",
    title: "Expense Tracker",
    category: "iOS Application",
    description: `<p>A simple and secure personal finance app that helps users track daily expenses, manage categories, and store receipts, built using SwiftUI and Firebase with a focus on clean architecture and real-world backend integration.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                      <li><p>🔐 <strong>Firebase Authentication</strong><br/>Secure email-based user login to protect personal financial data.</p></li>
                        <li><p>💸 <strong>Expense Management</strong>:<br/>Add, edit, delete, and categorize expenses with an intuitive workflow.</p></li>
                        <li><p>📁 <strong>Receipt Storage (Firebase Storage)</strong><br/>Upload and securely store receipt images in the cloud for future reference.</p></li>
                        <li><p>☁️ <strong>Cloud Sync</strong>:<br/>Real-time data synchronization across devices using Firebase backend services.</p></li>
                        <li><p>🎨 <strong>SwiftUI Interface</strong><br/>Clean, responsive, and modern UI designed entirely with SwiftUI.</p></li>
                        <li><p>🏗️ <strong>Clean Architecture</strong>:<br/>Structured codebase demonstrating scalable design and Firebase integration best practices.</p></li>
                      </ul>`,
    image: "./assets/images/projects/expense_tracker.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/Expense-Tracker" }
    ]
  },
  {
    id: "valentinesday2026",
    title: "Valentine’s Day ❤️",
    category: "iOS Application",
    description: `<p>A visually immersive Valentine’s Day celebration app built with SwiftUI, featuring a romantic animated intro with a dynamic beating heart, interactive particle explosions, and soft floating love particles.<br/>
The experience blends custom vector drawing, orchestrated animations, and GPU-optimized compositing to deliver smooth, high-performance visuals — all using native iOS technologies.<br/>
Perfect for splash screens, themed event apps, romantic greeting experiences, or learning advanced SwiftUI animation systems.
</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                      <li><p>💓 <strong>Dynamic animated heart</strong>:<br/>Custom Shape with smooth morphing and organic pulse animation</p></li>
                        <li><p>💥 <strong>Interactive particle explosion system</strong>:<br/>Radial burst animations with randomized motion physics</p></li>
                        <li><p>💕 <strong>Floating love particle background</strong>:<br/>Soft ambient particles with continuous motion</p></li>
                        <li><p>🌅 <strong>Cinematic glow effects</strong>:<br/>Layered radial gradients with realistic blend modes</p></li>
                        <li><p>🎬 <strong>Orchestrated animation sequencing</strong>:<br/>Carefully tuned timing curves and staggered transitions</p></li>
                      </ul>`,
    image: "./assets/images/projects/valentines_day_2026.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/HappyValentinesDay" }
    ]
  },
  {
    id: "newyear2026",
    title: "New Year 2026",
    category: "iOS Application",
    description: `<p>A visually rich New Year celebration app built with SwiftUI, featuring a countdown experience followed by realistic fireworks, floating 3D balloons, and neon glowing “Happy New Year 2026” text. The app combines SwiftUI animations with Core Animation particle systems (CAEmitterLayer) to deliver smooth, high-performance, festival-quality visuals — all using native iOS technologies. Perfect for splash screens, festive launches, greeting apps, or learning advanced SwiftUI animation techniques.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                      <li><p>⏱ <strong>Animated countdown</strong>:<br/>(10 → 1)</p></li>
                        <li><p>🎆 <strong>Realistic fireworks</strong>:<br/>Radial bursts, Glowing cores, Long spark trails</p></li>
                        <li><p>🎈 <strong>3D-style floating balloons</strong></p></li>
                        <li><p>🏷 <strong>“Happy New Year 2026”</strong>:<br/>Text attached to balloon strings</p></li>
                        <li><p>🌑 <strong>Cinematic dark gradient background</strong></p></li>
                        <li><p>🎏 <strong>Bottom-to-top floating animation</strong></p></li>
                        <li><p>⚡ <strong>High-performance & fully native</strong>:<br/>(no third-party libraries)</p></li>
                      </ul>`,
    image: "./assets/images/projects/new_year_2026.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/Happy-New-Year-2026" }
    ]
  },
  {
    id: "jkportfolio",
    title: "JK Portfolio",
    category: "iOS Application",
    description: `<p>A personal portfolio app showcasing apps and achievements, featuring Lottie & SwiftUI animations and built with MVVM architecture.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🏗️ <strong>MVVM Architecture</strong>:<br/>Designed with clean architecture principles.</p></li>
                        <li><p>🎨 <strong>SwiftUI & Lottie</strong>:<br/>Modern UI with engaging animations.</p></li>
                        <li><p>📄 <strong>PDF Viewer</strong>:<br/>Integrated document viewing capabilities.</p></li>
                        <li><p>📱 <strong>Swift 5 & Xcode 15</strong>:<br/>Built with the latest Apple technologies.</p></li>
                      </ul>`,
    image: "./assets/images/projects/jk_portfolio_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/JK-Portfolio" }
    ]
  },
  {
    id: "clinicbooking",
    title: "Clinic Booking",
    category: "iOS Application",
    description: `<p>A healthcare scheduling app connecting patients with clinics and doctors through a simple, accessible interface.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🩺 <strong>Doctor Search</strong>:<br/>Filter by specialty.</p></li>
                        <li><p>📅 <strong>Easy Booking</strong>:<br/>Reserve slots instantly.</p></li>
                        <li><p>🔔 <strong >Reminders</strong>:<br/>Notifications for appointments.</p></li>
                        <li><p>📄 <strong>Patient Records</strong>:<br/>Track past visits.</p></li>
                      </ul>`,
    image: "./assets/images/projects/clinic_booking_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/ClinicBooking" }
    ]
  },
  {
    id: "news",
    title: "NEWS App",
    category: "iOS Application",
    description: `<p>A modern news aggregator delivering real-time updates from multiple trusted sources.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📰 <strong>Curated Feed</strong>:<br/>Top stories across categories.</p></li>
                        <li><p>🔍 <strong>Category Filters</strong>:<br/>Politics, tech, sports, and more.</p></li>
                        <li><p>🌐 <strong>Multi-Source Integration</strong>:<br/>Diverse perspectives.</p></li>
                        <li><p>📲 <strong>Offline Mode</strong>:<br/>Save and read later.</p></li>
                      </ul>`,
    image: "./assets/images/projects/news_app_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/News-App" }
    ]
  },
  {
    id: "weather",
    title: "Weather App",
    category: "iOS Application",
    description: `<p>A lightweight weather app providing accurate, real-time forecasts in a clean, easy-to-use design.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🌤️ <strong>Live Updates</strong>:<br/>Temperature, humidity, wind.</p></li>
                        <li><p>📅 <strong>7-Day Forecast</strong>:<br/>Detailed outlook.</p></li>
                        <li><p>📍 <strong>Location Detection</strong>:<br/>Auto updates by GPS.</p></li>
                        <li><p>⏱️ <strong>Hourly Data</strong>:<br/>Precise short-term forecasts.</p></li>
                      </ul>`,
    image: "./assets/images/projects/weather_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/WeatherApp-SwiftUI" }
    ]
  },
  {
    id: "bmi",
    title: "BMI Calculator App",
    category: "iOS Application",
    description: `<p>A fitness utility app offering instant BMI calculations and health categorization.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>⚖️ <strong>Quick Calculation</strong>:<br/>Input height/weight instantly.</p></li>
                        <li><p>📊 <strong>Health Categories</strong>:<br/>From underweight to obese.</p></li>
                        <li><p>📱 <strong>Minimal UI</strong>:<br/>Clean, focused design.</p></li>
                        <li><p>📈 <strong>Progress Tracking</strong>:<br/>Monitor over time.</p></li>
                      </ul>`,
    image: "./assets/images/projects/bmi_calculator_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/BMI-Calculator" }
    ]
  },
  {
    id: "novitas",
    title: "Novitas HealthCare",
    category: "iOS Application",
    description: `<p>A healthcare platform for Novitas patients to manage appointments, prescriptions, and records securely.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🧑&zwj;⚕️ <strong>Doctor Directory</strong>:<br/>Browse specialists.</p></li>
                        <li><p>📅 <strong>Appointment Scheduling</strong>:<br/>Easy booking and rescheduling.</p></li>
                        <li><p>💊 <strong>Medication Management</strong>:<br/>Dosage reminders.</p></li>
                        <li><p>📄 <strong>Records Access</strong>:<br/>Secure history and lab reports.</p></li>
                      </ul>`,
    image: "./assets/images/projects/novitas_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/Novitas" }
    ]
  },
  {
    id: "foodordering",
    title: "Food Ordering App",
    category: "iOS Application",
    description: `<p>A seamless online food delivery platform that connects users with restaurants, offering a fast and intuitive way to browse menus, customize orders, and track deliveries.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🍴 <strong>Restaurant Catalog</strong>:<br/>Browse menus with images and categories.</p></li>
                        <li><p>🔔 <strong>Smart Notifications</strong>:<br/>Updates on order confirmation and delivery.</p></li>
                      </ul>`,
    image: "./assets/images/projects/food_ordering_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/FoodOrdering" }
    ]
  },
  {
    id: "reminders",
    title: "Reminders App",
    category: "iOS Application",
    description: `<p>A productivity-focused app designed to help users stay on top of their tasks with quick, reliable reminders.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>⏰ <strong>Task Scheduling</strong>:<br/>Set one-time or recurring reminders.</p></li>
                        <li><p>🔔 <strong>Push Notifications</strong>:<br/>Timely alerts for due tasks.</p></li>
                        <li><p>📱 <strong>Clean UI</strong>:<br/>Minimalist design for easy task management.</p></li>
                        <li><p>🎨 <strong>Custom Labels</strong>:<br/>Organize tasks by categories or priorities.</p></li>
                      </ul>`,
    image: "./assets/images/projects/reminders_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/Reminders" }
    ]
  },
  {
    id: "notes",
    title: "Notes App",
    category: "iOS Application",
    description: `<p>A simple yet powerful note-taking app for capturing thoughts, ideas, and lists anytime, anywhere.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📝 <strong>Rich Text Notes</strong>:<br/>Add formatting, bullet points, and lists.</p></li>
                        <li><p>📂 <strong>Folders &amp; Tags</strong>:<br/>Organize notes for quick access.</p></li>
                        <li><p>🔍 <strong>Quick Search</strong>:<br/>Find notes instantly with keywords.</p></li>
                      </ul>`,
    image: "./assets/images/projects/notes_app_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/NotesApp" }
    ]
  },
  {
    id: "firebaseauth",
    title: "Firebase Authentication",
    category: "iOS Application",
    description: `<p>A secure authentication module built using Firebase, providing developers and users with safe and reliable sign-in options.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🔒 <strong>Multiple Login Methods</strong>:<br/>Email &amp; Google.</p></li>
                        <li><p>🛡️ <strong>Secure Sessions</strong>:<br/>Token-based authentication.</p></li>
                        <li><p>📱 <strong>Seamless Integration</strong>:<br/>Easily added to existing apps.</p></li>
                        <li><p>⚡ <strong>Scalable</strong>:<br/>Built to handle large user bases.</p></li>
                      </ul>`,
    image: "./assets/images/projects/firebase_signin_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/FirebaseSignIn" }
    ]
  },
  {
    id: "onboarding",
    title: "Onboarding Screens",
    category: "iOS Application",
    description: `<p>A user-friendly onboarding flow designed to welcome and guide users through an app&rsquo;s core features.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>👋 <strong>Interactive Walkthrough</strong>:<br/>Engaging slides with visuals.</p></li>
                        <li><p>🎨 <strong>Custom Animations</strong>:<br/>Smooth transitions for better UX.</p></li>
                        <li><p>📖 <strong>Feature Highlights</strong>:<br/>Educates users about app value quickly.</p></li>
                        <li><p>🔄 <strong>Skippable Flow</strong>:<br/>Option to skip or revisit onboarding.</p></li>
                      </ul>`,
    image: "./assets/images/projects/onboarding_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/OnboardingScreens" }
    ]
  },
  {
    id: "charts",
    title: "Charts",
    category: "iOS Application",
    description: `<p>An interactive charting component designed to display data with clarity and precision, ideal for analytics dashboards.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📊 <strong>Multiple Chart Types</strong>:<br/>Bar, line, pie, and area charts.</p></li>
                        <li><p>📱 <strong>Responsive Design</strong>:<br/>Works across screen sizes.</p></li>
                        <li><p>🎨 <strong>Customizable Styles</strong>:<br/>Colors, labels, legends, and tooltips.</p></li>
                        <li><p>⚡ <strong>Smooth Animations</strong>:<br/>Enhances data presentation.</p></li>
                      </ul>`,
    image: "./assets/images/projects/charts_swiftui.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/Charts-SwiftUI" }
    ]
  },
  {
    id: "bottomsheet",
    title: "Bottom Sheet",
    category: "iOS Application",
    description: `<p>A utility app showcasing modern bottom sheet UI patterns, enabling intuitive interactions for quick actions and additional content.</p>`,
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📱 <strong>Modal &amp; Persistent Sheets</strong>:<br/>Support for different use cases.</p></li>
                        <li><p>🎛️ <strong>Interactive Controls</strong>:<br/>Buttons, forms, and lists inside sheets.</p></li>
                        <li><p>🔄 <strong>Gesture Support</strong>:<br/>Drag up, down, or dismiss with swipes.</p></li>
                        <li><p>🎨 <strong>Customizable Layouts</strong>:<br/>Flexible styling to match app themes.</p></li>
                      </ul>`,
    image: "./assets/images/projects/bottom_sheet_web.jpg",
    links: [
      { label: "Learn More", url: "https://github.com/tjana17/BottomSheetDropdown" }
    ]
  },
  {
    id: "novapos",
    title: "Nova POS",
    category: "Web Development",
    description: "<p>A modern point-of-sale web application designed for retail businesses to manage sales, inventory, and customer data efficiently.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🛒 <strong>Sales Management</strong>:<br/>Streamlined checkout and transaction processing.</p></li>
                        <li><p>📦 <strong>Inventory Tracking</strong>:<br/>Real-time stock monitoring and alerts.</p></li>
                        <li><p>📊 <strong>Analytics Dashboard</strong>:<br/>Sales reports and business insights.</p></li>
                        <li><p>👥 <strong>Customer Management</strong>:<br/>Profiles, purchase history, and loyalty tracking.</p></li>
                      </ul>`,
    image: "./assets/images/projects/novapos_web.jpg",
    links: [
      { label: "Learn More", url: "https://novapos.ai" }
    ]
  },
  {
    id: "nib",
    title: "New India Bazar",
    category: "Web Development",
    description: "<p>An e-commerce web platform for an Indian grocery store, offering online ordering and delivery services.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🛍️ <strong>Product Catalog</strong>:<br/>Browse categorized grocery items with search and filters.</p></li>
                        <li><p>🛒 <strong>Online Ordering</strong>:<br/>Add to cart, apply coupons, and checkout seamlessly.</p></li>
                        <li><p>🚚 <strong>Delivery Tracking</strong>:<br/>Real-time order status and delivery updates.</p></li>
                        <li><p>💳 <strong>Secure Payments</strong>:<br/>Multiple payment gateway integrations.</p></li>
                      </ul>`,
    image: "./assets/images/projects/nib_web.jpg",
    links: [
      { label: "Learn More", url: "https://newindiabazar.com" }
    ]
  },
  {
    id: "s2kweb",
    title: "Store2K",
    category: "Web Development",
    description: "<p>A full-featured e-commerce grocery web platform providing seamless online shopping and delivery experience.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🛒 <strong>Smart Shopping</strong>:<br/>Intuitive product browsing with categories and search.</p></li>
                        <li><p>📦 <strong>Order Management</strong>:<br/>Track orders from placement to delivery.</p></li>
                        <li><p>🔔 <strong>Notifications</strong>:<br/>Alerts for deals, order updates, and promotions.</p></li>
                        <li><p>📱 <strong>Responsive Design</strong>:<br/>Optimized experience across all devices.</p></li>
                      </ul>`,
    image: "./assets/images/projects/s2k_web.jpg",
    links: [
      { label: "Learn More", url: "https://store2k.com" }
    ]
  },
  {
    id: "qpz",
    title: "Q PaymentZ",
    category: "Web Development",
    description: "<p>A fintech web application providing secure digital payment solutions for businesses and consumers.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>💳 <strong>Secure Transactions</strong>:<br/>End-to-end encrypted payment processing.</p></li>
                        <li><p>📊 <strong>Transaction History</strong>:<br/>Detailed logs and downloadable statements.</p></li>
                        <li><p>🔐 <strong>Multi-Factor Auth</strong>:<br/>Enhanced security for account access.</p></li>
                        <li><p>🌐 <strong>Multi-Currency Support</strong>:<br/>Process payments in various currencies.</p></li>
                      </ul>`,
    image: "./assets/images/projects/qpz_web.jpg",
    links: [
      { label: "Learn More", url: "https://qpaymentz.com" }
    ]
  },
  {
    id: "registeryourcompany",
    title: "Register Your Company",
    category: "Web Development",
    description: "<p>A business registration web platform simplifying the company formation process with guided workflows.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>📋 <strong>Step-by-Step Workflow</strong>:<br/>Guided company registration process.</p></li>
                        <li><p>📄 <strong>Document Management</strong>:<br/>Upload and manage required documents.</p></li>
                        <li><p>🔔 <strong>Status Tracking</strong>:<br/>Real-time updates on application progress.</p></li>
                        <li><p>💼 <strong>Business Packages</strong>:<br/>Tiered service plans for different needs.</p></li>
                      </ul>`,
    image: "./assets/images/projects/registeryourcompany_web.jpg",
    links: [
      { label: "Learn More", url: "https://registeryourcompany.com" }
    ]
  },
  {
    id: "uitalents",
    title: "UI Talents",
    category: "Web Development",
    description: "<p>A talent marketplace web platform connecting UI/UX designers and developers with businesses seeking creative professionals.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>👤 <strong>Talent Profiles</strong>:<br/>Showcase portfolios, skills, and experience.</p></li>
                        <li><p>🔍 <strong>Smart Matching</strong>:<br/>Connect businesses with the right talent.</p></li>
                        <li><p>💬 <strong>Direct Messaging</strong>:<br/>In-platform communication for collaboration.</p></li>
                        <li><p>⭐ <strong>Reviews &amp; Ratings</strong>:<br/>Build trust through verified feedback.</p></li>
                      </ul>`,
    image: "./assets/images/projects/uitalents_web.jpg",
    links: [
      { label: "Learn More", url: "https://uitalents.com" }
    ]
  },
  {
    id: "qr-web",
    title: "QR Generator - Web App",
    category: "Web Development",
    description: "<p>A lightweight web application for generating customizable QR codes instantly from any text or URL input.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>🔗 <strong>Instant Generation</strong>:<br/>Create QR codes from any text or URL.</p></li>
                        <li><p>🎨 <strong>Customizable</strong>:<br/>Adjust size, color, and format options.</p></li>
                        <li><p>📥 <strong>Download &amp; Share</strong>:<br/>Save QR codes as images for easy sharing.</p></li>
                        <li><p>⚡ <strong>No Server Required</strong>:<br/>Fully client-side for instant results.</p></li>
                      </ul>`,
    image: "./assets/images/projects/qr_generator_web.png",
    links: [
      { label: "Learn More", url: "https://tjana17.github.io/qr-generator-web/" }
    ]
  },
  {
    id: "expensify-web",
    title: "Expensify - Web App",
    category: "Web Development",
    description: "<p>A web-based expense tracking application for managing personal finances with categorized spending and visual reports.</p>",
    keyfeatures: `<h3>✨ <strong>Key Features</strong></h3><br/>
                      <ul>
                        <li><p>💸 <strong>Expense Tracking</strong>:<br/>Log and categorize daily spending.</p></li>
                        <li><p>📊 <strong>Visual Reports</strong>:<br/>Charts and graphs for spending analysis.</p></li>
                        <li><p>📅 <strong>Monthly Budgets</strong>:<br/>Set and monitor budget limits.</p></li>
                        <li><p>📱 <strong>Responsive Design</strong>:<br/>Works seamlessly on mobile and desktop.</p></li>
                      </ul>`,
    image: "./assets/images/projects/expensify_web.png",
    links: [
      { label: "Learn More", url: "https://jk-expensify.infinityfree.me/" }
    ]
  }
];

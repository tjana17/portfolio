'use strict';

// Blog Data Array
const blogs = [
    {
        id: "ios-arch",
        title: "How I Architect Scalable iOS Apps Using SwiftUI & MVVM",
        category: "iOS Development",
        date: "Dec 17, 2025",
        author: "Janarthanan",
        image: "./assets/images/blog-1.webp",
        description: "Building an iOS app that scales, performs well, and remains maintainable for years is where real engineering begins.",
        contentUrl: "./assets/blogs/architect-scalable-ios-apps-using-swiftui-mvvm.html"
    },
    {
        id: "ios-firebase",
        title: "Firebase in iOS: Authentication, Firestore & Storage – Best Practices",
        category: "iOS Development",
        date: "Feb 03, 2026",
        author: "Janarthanan Kannan",
        image: "./assets/images/projects/firebase_signin_web.webp",
        description: "Firebase is a powerful platform for building mobile and web applications. It provides a wide range of services that can be used to build a complete application without writing any backend code.",
        contentUrl: "./assets/blogs/firebase-in-ios-authentication-firestore-storage-best-practices.html"
    }
];

// Open Blog Modal
async function openBlogModal(blogId) {
    const blog = blogs.find(function (b) { return b.id === blogId; });
    if (!blog) return;

    const titleEl = document.getElementById("modalBlogTitle");
    const dateEl = document.getElementById("modalBlogDate");
    const categoryEl = document.getElementById("modalBlogCategory");
    const authorEl = document.getElementById("modalBlogAuthor");
    const imageEl = document.getElementById("modalBlogImage");
    const descEl = document.getElementById("modalBlogDescription");
    const contentEl = document.getElementById("modalBlogContent");
    const modalEl = document.getElementById("blogModal");

    if (!titleEl || !contentEl || !modalEl) return;

    titleEl.textContent = blog.title;
    if (dateEl) dateEl.textContent = blog.date;
    if (categoryEl) categoryEl.textContent = blog.category;
    if (authorEl) authorEl.textContent = "By " + blog.author;
    if (imageEl) imageEl.src = blog.image;
    if (descEl) descEl.textContent = blog.description;
    contentEl.innerHTML = "<p>Loading content...</p>";
    modalEl.style.display = "flex";

    // Fetch content if needed
    var content = blog.content;
    if (blog.contentUrl && !content) {
        try {
            var response = await fetch(blog.contentUrl);
            if (response.ok) {
                content = await response.text();
                blog.content = content;
            } else {
                content = "<p>Error loading content.</p>";
            }
        } catch (error) {
            console.error("Error fetching blog content:", error);
            content = "<p>Error loading content.</p>";
        }
    }

    contentEl.innerHTML = typeof DOMPurify !== "undefined" ? DOMPurify.sanitize(content || "") : (content || "");
}

// Close Blog Modal
function closeBlogModal() {
    var modalEl = document.getElementById("blogModal");
    if (modalEl) modalEl.style.display = "none";
}

// Close when clicking outside
window.addEventListener("click", function (event) {
    var blogModal = document.getElementById("blogModal");
    var projectModal = document.getElementById("projectModal");

    if (event.target === blogModal) {
        closeBlogModal();
    } else if (event.target === projectModal) {
        closeModal();
    }
});

// Attach close button listener
document.addEventListener("DOMContentLoaded", function () {
    var closeBtn = document.getElementById("blogModalCloseBtn");
    if (closeBtn) closeBtn.addEventListener("click", closeBlogModal);
});

// Render Blogs
document.addEventListener("DOMContentLoaded", function () {
    var blogListEl = document.getElementById("blog-posts-list");
    if (!blogListEl) return;

    blogs.forEach(function (blog) {
        var li = document.createElement("li");
        li.className = "blog-post-item";

        var link = document.createElement("a");
        link.href = "#";
        link.addEventListener("click", function (e) {
            e.preventDefault();
            openBlogModal(blog.id);
        });

        link.innerHTML =
            '<figure class="blog-banner-box">' +
            '<img src="' + blog.image + '" alt="' + blog.title + '" loading="lazy">' +
            '</figure>' +
            '<div class="blog-content">' +
            '<div class="blog-meta">' +
            '<p class="blog-category">' + blog.category + '</p>' +
            '<span class="dot"></span>' +
            '<time datetime="' + new Date(blog.date).toISOString().split('T')[0] + '">' + blog.date + '</time>' +
            '</div>' +
            '<h3 class="h3 blog-item-title">' + blog.title + '</h3>' +
            '<p class="blog-text">' + blog.description + '</p>' +
            '</div>';

        li.appendChild(link);
        blogListEl.appendChild(li);
    });
});

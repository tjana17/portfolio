
// Blog Data Array
const blogs = [
    {
        id: "ios-arch",
        title: "How I Architect Scalable iOS Apps Using SwiftUI & MVVM",
        category: "iOS Development",
        date: "Dec 17, 2025",
        author: "Janarthanan",
        image: "./assets/images/blog-1.jpg",
        description: "Building an iOS app that scales, performs well, and remains maintainable for years is where real engineering begins.",
        contentUrl: "./assets/blogs/architect-scalable-ios-apps-using-swiftui-mvvm.html"
    }
    // ... existing items ...
];

// Open Blog Modal
async function openBlogModal(blogId) {
    const blog = blogs.find(b => b.id === blogId);
    if (!blog) return;

    document.getElementById("modalBlogTitle").innerText = blog.title;
    document.getElementById("modalBlogDate").innerText = blog.date;
    document.getElementById("modalBlogCategory").innerText = blog.category;
    document.getElementById("modalBlogAuthor").innerText = "By " + blog.author;
    document.getElementById("modalBlogImage").src = blog.image;
    document.getElementById("modalBlogDescription").innerHTML = blog.description;

    // Fetch content if needed
    let content = blog.content;
    if (blog.contentUrl && !content) {
        try {
            const response = await fetch(blog.contentUrl);
            if (response.ok) {
                content = await response.text();
                // Cache it so we don't fetch again
                blog.content = content;
            } else {
                content = "<p>Error loading content.</p>";
            }
        } catch (error) {
            console.error("Error fetching blog content:", error);
            content = "<p>Error loading content.</p>";
        }
    }

    document.getElementById("modalBlogContent").innerHTML = content || "";
    document.getElementById("blogModal").style.display = "flex";
}

// Close Blog Modal
function closeBlogModal() {
    document.getElementById("blogModal").style.display = "none";
}

// Close when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById("blogModal");
    if (event.target === modal) {
        closeBlogModal();
    } else {
        // Also check for project modal since we're overriding window.onclick
        const projectModal = document.getElementById("projectModal");
        if (projectModal && event.target === projectModal) {
            projectModal.style.display = "none";
        }
    }
}

// Render Blogs
document.addEventListener("DOMContentLoaded", function () {
    const blogListEl = document.getElementById("blog-posts-list");
    if (!blogListEl) return;

    blogs.forEach(blog => {
        const li = document.createElement("li");
        li.className = "blog-post-item";

        li.innerHTML = `
      <a href="#" onclick="openBlogModal('${blog.id}'); return false;">
        <figure class="blog-banner-box">
          <img src="${blog.image}" alt="${blog.title}" loading="lazy">
        </figure>
        <div class="blog-content">
          <div class="blog-meta">
            <p class="blog-category">${blog.category}</p>
            <span class="dot"></span>
            <time datetime="${new Date(blog.date).toISOString().split('T')[0]}">${blog.date}</time>
          </div>
          <h3 class="h3 blog-item-title">${blog.title}</h3>
          <p class="blog-text">${blog.description}</p>
        </div>
      </a>
    `;

        blogListEl.appendChild(li);
    });
});

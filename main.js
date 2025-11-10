// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Expandable project sections
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const project = btn.closest(".project");
    const desc = project.querySelector(".description");
    const isOpen = desc.style.display === "block";
    desc.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen ? "▼" : "▲";
  });
});

// Scroll Up Button
const scrollUpBtn = document.getElementById('scrollUp');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
});
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle Description for Projects/WIP
document.querySelectorAll('.project img').forEach(img => {
  img.addEventListener('click', () => {
    const desc = img.nextElementSibling;
    if (desc.style.maxHeight && desc.style.maxHeight !== '0px') {
      desc.style.maxHeight = '0';
    } else {
      desc.style.maxHeight = desc.scrollHeight + 'px';
    }
  });
});

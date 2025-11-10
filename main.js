// Scroll Up Button
const scrollUpBtn = document.getElementById('scrollUp');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollUpBtn.style.display = 'block';
  else scrollUpBtn.style.display = 'none';
});
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle description for projects/WIP
document.querySelectorAll('.project').forEach(project => {
  const img = project.querySelector('img');
  const arrow = project.querySelector('.arrow');
  const desc = project.querySelector('.description');

  function toggleDesc() {
    if (desc.style.maxHeight && desc.style.maxHeight !== '0px') {
      desc.style.maxHeight = '0';
      project.classList.remove('active');
    } else {
      desc.style.maxHeight = desc.scrollHeight + 'px';
      project.classList.add('active');
    }
  }

  img.addEventListener('click', toggleDesc);
  arrow.addEventListener('click', toggleDesc);
});

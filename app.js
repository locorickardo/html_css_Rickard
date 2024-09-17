const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️'; // Change to light mode icon
    } else {
      darkModeToggle.textContent = '🌙'; // Change to dark mode icon
    }
  });

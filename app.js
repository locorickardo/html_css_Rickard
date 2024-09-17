const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

/* localStorage check for dark mode */
if (localStorage.getItem('dark-mode') === 'enabled' ) {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️'
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      darkModeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      darkModeToggle.textContent = '🌙';
    }
  });

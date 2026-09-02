
document.querySelectorAll('[data-logout]').forEach((button) => {
  button.addEventListener('click', () => {
    localStorage.removeItem('clinic-user');
    window.location.href = '/login/index.html';
  });
});


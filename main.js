function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('show');
}

function generatePassword() {
  const length = document.getElementById('length').value;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  document.getElementById('password-output').value = password;
}

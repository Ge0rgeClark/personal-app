function navigate(page) {
  document.querySelectorAll('.view').forEach(div => div.classList.remove('active'));
  const section = document.getElementById(page);
  if (section) section.classList.add('active');
}
function navigate(page) {
  document.querySelectorAll('.view').forEach(div => div.classList.remove('active'));
  const section = document.getElementById(page);
  if (section) section.classList.add('active');
}

document.getElementById('toggle-btn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('collapsed');
});


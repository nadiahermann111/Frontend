const textElement = document.getElementById('text');
const incrementBtn = document.getElementById('incrementBtn');
const toggleColorBtn = document.getElementById('toggleColorBtn');

incrementBtn.addEventListener('click', () => {
  const currentValue = parseInt(textElement.textContent, 10);
  textElement.textContent = currentValue + 1;
});


toggleColorBtn.addEventListener('click', () => {
  textElement.classList.toggle('red');
});

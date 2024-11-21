
const form = document.getElementById('itemForm');
const input = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const newItemText = input.value.trim();  
  if (newItemText) { 
    const newListItem = document.createElement('li');
    newListItem.textContent = newItemText;  
    
    itemList.appendChild(newListItem);                                                                     
    input.value = '';  
    input.focus(); 
  }
});

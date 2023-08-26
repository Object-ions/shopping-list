// Get DOM elements
const itemForm = document.querySelector('item-form');
const itemInput = document.querySelector('item-input');
const itemList = document.querySelector('item-list');

// Event listeners
itemForm.addEventListener('submit', addItem);
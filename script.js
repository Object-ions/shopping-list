// Get DOM elements
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

// Add item to list
function addItem(e) {
    e.preventDefault();
    
    // Validate input
    if (itemInput.value === '') {
        popupMessage('Please enter an item');
    } else {
        false;
    }
}

function popupMessage(message) {
    console.log(message);
    const popup = document.querySelector('#popup');
    popup.innerHTML = message;
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}


// Event listeners
itemForm.addEventListener('submit', addItem);
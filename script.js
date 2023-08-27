// Get DOM elements
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
itemInput.focus();
const itemList = document.querySelector('#item-list');

// Add item to list
function addItem(e) {
    e.preventDefault();
    
    const itemInputValue = itemInput.value;

    // Validate input
    if (itemInputValue === '') {
        popupMessage('Please enter an item');
    } else {
        
        // Create li item
        const li = document.createElement('li');
        li.innerText = itemInputValue;

        // Create X button
        const xButton = document.createElement('button');
        xButton.className = 'remove-item btn-link text-red';

        // Create Icon
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-xmark';

        // Append icon to xButton
        xButton.appendChild(icon);

        // Append xButton to li
        li.appendChild(xButton);

        // Append li to itemList
        itemList.appendChild(li);

        // Clear input and focus
        itemInput.value = '';
        itemInput.focus();
        
    }

}

function popupMessage(message) {
    const popup = document.querySelector('#popup');
    popup.innerHTML = message;
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

function removeItem(e) {

    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
}


// Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
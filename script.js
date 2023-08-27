// Get DOM elements
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');

itemInput.focus();

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

        // Check UI
        resetDOM();

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

// Remove item from list
function removeItem(e) {

    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure you want to remove this item?')) {
            e.target.parentElement.parentElement.remove();
        
            resetDOM();
        }
    }
}

// Clear all
function clearAll() {
    if (confirm('Are you sure you want to clear all items?')) {
    itemList.innerHTML = '';
    resetDOM();
    }
}

// reset DOM
function resetDOM () {
    const items = document.querySelectorAll('li');

    if (items.length === 0) {
        clearBtn.style = 'display: none';
        itemFilter.style = 'display: none';
    } else {
        clearBtn.style = 'display: block';
        itemFilter.style = 'display: block';
    }
}


// Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAll);

resetDOM();
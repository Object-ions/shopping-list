// Get DOM elements
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');

let isEditMode = false;

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

        // Check for edit mode
        if (isEditMode) {
            const itemToEdit = itemList.querySelector('.edit-mode');

            itemToEdit.classList.remove('edit-mode');
            itemToEdit.remove();
            isEditMode = false;
        }

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
function onClickItem(e) {

    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure you want to remove this item?')) {
            e.target.parentElement.parentElement.remove();
        
            resetDOM();
        }
    } else {
        console.log('1');
        setItemToEdit(e.target);
    }
}

// Set item to edit
function setItemToEdit(item) {

    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'));

    isEditMode = true;
    item.classList.add('edit-mode');
    const formBtn = itemForm.querySelector('button');
    formBtn.innerHTML = `<i class="fa-solid fa-pencil"></i> Edit Item`;
    formBtn.style.backgroundColor = '#228b22';
    itemInput.value = item.textContent;
}

// Clear all
function clearAll() {
    if (confirm('Are you sure you want to clear all items?')) {
    itemList.innerHTML = '';
    resetDOM();
    }
}

// Filter items
function filterItems(e) {
    const items = document.querySelectorAll('li');

    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text)!== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    
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
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearAll);
itemFilter.addEventListener('input', filterItems);

resetDOM();
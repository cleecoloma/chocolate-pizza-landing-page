'use strict';

function toggleStrikeThrough(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] === event.target) {
            const listItem = event.target.parentNode;

            if (event.target.checked){
                listItem.classList.add('checked');
            } else {
                listItem.classList.remove('checked');
            }

            break;
        }
    }
}

// Add event listeners for each checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (let i=0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('click', toggleStrikeThrough);
}
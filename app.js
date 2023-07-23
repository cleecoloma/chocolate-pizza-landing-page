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
=======
// const recipeElement = document.getElementById('input');
// let liElement = document.getElementById('li');

// function handleClick(event) {
//   event.preventDefault();
//   liElement.setAttribute('li', '.clicked');
//   console.log(liElement);
// }

// recipeElement.addEventListener('click', handleClick);

// function handleClick() {
  // let liElement = document.getElementById('li');
  // liElement.setAttribute('id', '.clicked');
//   document.getElementById('li').style.textDecoration = 'line-through';
// }

// const inputElement = document.getElementById('cb1');
// inputElement.onclick = function () {
//   handleClick();
// };

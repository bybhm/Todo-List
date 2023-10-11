// Declare variables
let todoInput;  // To store the user's input
let todoArray = [];  // To store the to-do items

// Function to add a to-do item
const addTodo = () => {
  // Get the input value and trim any extra whitespace
  todoInput = document.querySelector('#todoinput').value.trim();

  // Check if the input is empty
  if (todoInput === '') {
    showPopup('This field is empty');  // Show a popup with a message
  } 
  // Check if the to-do is already in the list
  else if (todoArray.includes(todoInput)) {
    showPopup('This todo is already in your list');  // Show a popup with a message
  } 
  // Check if the list is full
  else if (todoArray.length >= 6) {
    showPopup('Your todo list is full');  // Show a popup with a message
  } 
  // If all checks pass, add the to-do to the list
  else {
    todoArray.push(todoInput);
    createTodoElement(todoInput, todoArray.length - 1);
  }

  // Clear the input field
  document.querySelector('#todoinput').value = '';
};

// Function to clear all to-do items
const clearTodos = () => {
  todoArray = [];  // Reset the to-do list
  clearTodoElements();  // Remove all to-do elements from the page
};

// Function to clear to-do elements from the page
const clearTodoElements = () => {
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => todo.remove());  // Remove each to-do element
};

// Function to remove a specific to-do item by its index
const removeTodo = (index) => {
  if (index >= 0 && index < todoArray.length) {
    // Remove the to-do item from the list
    todoArray.splice(index, 1);
    // Remove the corresponding to-do element from the page
    const todoElement = document.querySelector(`#todo-${index}`);
    if (todoElement) {
      todoElement.remove();
    }
  }
};

// Function to sort the to-do items
const sortTodos = () => {
  // Sort the to-do items alphabetically
  todoArray.sort((a, b) => {
    return a - b || a.localeCompare(b);
  });
  clearTodoElements();  // Clear the existing to-do elements from the page
  // Create new to-do elements for the sorted list
  todoArray.forEach((todo, index) => {
    createTodoElement(todo, index);
  });
};

// Function to sort the to-do items and show a message if the list is empty
const sortTodosElements = () => {
  if (todoArray.length == 0) {
    showPopup('This field is empty');  // Show a popup with a message
  } else {
    sortTodos();  // Sort the to-do items
  }
};

// Function to display a temporary popup message
const showPopup = (message) => {
  const popupHTML = `<div class="popup">
                        <span class="popuptext show">${message}</span>
                    </div>`;
  document
    .querySelector('.inputcontainer')
    .insertAdjacentHTML('beforeend', popupHTML);  // Insert the popup message
  // Remove the popup after 3 seconds
  setTimeout(() => {
    document.querySelector('.popup').remove();
  }, 3000);
};

// Function to create a new to-do element and display it on the page
const createTodoElement = (todo, index) => {
  const todoHTML = `<div class='todo' id='todo-${index}' onclick='removeTodo(${index})'> 
    <span class='index'>${++index}.</span>  ${todo}
  </div>`;
  document
    .querySelector('.inputcontainer')
    .insertAdjacentHTML('beforeend', todoHTML);  // Insert the to-do element
};

// Event listeners
document.querySelector('#addtodo').addEventListener('click', addTodo);  // Add to-do when "Add" button is clicked
document.querySelector('.input').addEventListener('keypress', (e) => {
  e.key == 'Enter' && addTodo();  // Add to-do when Enter key is pressed
});
document.querySelector('#cleartodo').addEventListener('click', clearTodos);  // Button clicked  clear all to-do items
document
  .querySelector('#sorttodo')
  .addEventListener('click', sortTodosElements);  // Button clicked sort to-do items

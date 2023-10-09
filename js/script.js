let todoInput;
let todoArray = [];

const addTodo = () => {
  todoInput = document.querySelector('#todoinput').value.trim();
  const inputContainer = document.querySelector('.inputcontainer');

  if (todoInput === '') {
    showPopup('This field is empty');
  } else if (todoArray.includes(todoInput)) {
    showPopup('This todo is already in your list');
  } else if (todoArray.length >= 8) {
    showPopup('Your todo list is full');
  } else {
    todoArray.push(todoInput);
    createTodoElement(todoInput, todoArray.length - 1); // Pass the index
    console.log(todoArray.length);
  }

  document.querySelector('#todoinput').value = '';
};

const clearTodos = () => {
  todoArray = [];
  const todos = document.querySelectorAll('.todo');
  todos.forEach(todo => todo.remove());
};

const removeTodo = (index) => {
  if (index >= 0 && index < todoArray.length) {
    todoArray.splice(index, 1);
    const todoElement = document.querySelector(`#todo-${index}`);
    if (todoElement) {
      todoElement.remove();
    }
  }
};

const sortTodos = () => {
  todoArray.sort();
  const inputContainer = document.querySelector('.inputcontainer');
  clearTodos();
  todoArray.forEach((todo, index) => {
    createTodoElement(todo, index);
  });
};

const showPopup = (message) => {
  const popupHTML = `<div class="popup">
                        <span class="popuptext show">${message}</span>
                    </div>`;
  document.querySelector('.inputcontainer').insertAdjacentHTML('beforeend', popupHTML);
  setTimeout(() => {
    document.querySelector('.popup').remove();
  }, 1000);
};

const createTodoElement = (todo, index) => {
  const todoHTML = `<div class='todo' id='todo-${index}' onclick='removeTodo(${index})'>${todo}</div>`;
  document.querySelector('.inputcontainer').insertAdjacentHTML('beforeend', todoHTML);
};

// HTML button click handlers
document.querySelector('#addTodoButton').addEventListener('click', addTodo);
document.querySelector('#clearTodosButton').addEventListener('click', clearTodos);
document.querySelector('#sortTodosButton').addEventListener('click', sortTodos);

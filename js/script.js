let todoInput;
let todoArray = [];

const addTodo = () => {
  todoInput = document.querySelector('#todoinput').value.trim();

  if (todoInput === '') {
    showPopup('This field is empty');
  } else if (todoArray.includes(todoInput)) {
    showPopup('This todo is already in your list');
  } else if (todoArray.length >= 6) {
    showPopup('Your todo list is full');
  } else {
    todoArray.push(todoInput);
    createTodoElement(todoInput, todoArray.length - 1);
  }

  document.querySelector('#todoinput').value = '';
};

const clearTodos = () => {
  todoArray = [];
  clearTodoEleents();
};

const clearTodoEleents = () => {
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => todo.remove());
};

const removeTodo = (index) => {
    todoArray.splice(index, 1);
    const todoElement = document.querySelector(`#todo-${index}`);
      todoElement.remove();
      clearTodoEleents();
      renderTodos();
};

const renderTodos = () => {
  todoArray.forEach((todo, index) => {
    createTodoElement(todo, index);
  });
};

const sortTodos = () => {
  todoArray.sort((a, b) => {
    return a - b || a.localeCompare(b);
  });
  clearTodoEleents();
  renderTodos();
};

const sortTodosElements = () => {
  if (todoArray.length == 0) {
    showPopup('This field is empty');
  } else {
    sortTodos();
  }
};

const showPopup = (message) => {
  const popupHTML = `<div class="popup"><span class="popuptext show" > ${message} </span> </div>`;
  document
    .querySelector('.inputcontainer')
    .insertAdjacentHTML('beforeend', popupHTML);
  setTimeout(() => {
    document.querySelector('.popup').remove();
  }, 3000);
};

const createTodoElement = (todo, index) => {
  const todoHTML = `<div class='todo' id='todo-${index}' onclick='removeTodo(${index})'> <span class='index'>${++index}.</span>  ${todo}</div>`;
  document
    .querySelector('.inputcontainer')
    .insertAdjacentHTML('beforeend', todoHTML);
};

document.querySelector('#addtodo').addEventListener('click', addTodo);
document.querySelector('.input').addEventListener('keypress', (e) => {
  e.key == 'Enter' && addTodo();
});
document.querySelector('#cleartodo').addEventListener('click', clearTodos);
document
  .querySelector('#sorttodo')
  .addEventListener('click', sortTodosElements);

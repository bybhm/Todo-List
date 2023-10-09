class TodoApp {
  constructor() {
    this.todoInput = document.querySelector('#todoinput');
    this.inputContainer = document.querySelector('.inputcontainer');
    this.todoArray = [];
    this.initEventListeners();
  }

  initEventListeners() {
    document.querySelector('#addTodoButton').addEventListener('click', () => this.addTodo());
    document.querySelector('#clearTodosButton').addEventListener('click', () => this.clearTodos());
    document.querySelector('#sortTodosButton').addEventListener('click', () => this.sortTodos());
  }

  addTodo() {
    const todoText = this.todoInput.value.trim();

    if (todoText === '') {
      this.showPopup('This field is empty');
    } else if (this.todoArray.includes(todoText)) {
      this.showPopup('This todo is already in your list');
    } else if (this.todoArray.length >= 8) {
      this.showPopup('Your todo list is full');
    } else {
      this.todoArray.push(todoText);
      this.createTodoElement(todoText);
      console.log(this.todoArray.length);
    }

    this.todoInput.value = '';
  }

  clearTodos() {
    this.todoArray = [];
    this.clearTodoElements();
  }

  removeTodo(index) {
    if (index >= 0 && index < this.todoArray.length) {
      this.todoArray.splice(index, 1);
      this.clearTodoElements();
      this.todoArray.forEach((todo, index) => {
        this.createTodoElement(todo, index);
      });
    }
  }

  sortTodos() {
    this.todoArray.sort();
    this.clearTodoElements();
    this.todoArray.forEach((todo, index) => {
      this.createTodoElement(todo, index);
    });
  }

  showPopup(message) {
    const popupHTML = `<div class="popup">
                          <span class="popuptext show">${message}</span>
                        </div>`;
    this.inputContainer.insertAdjacentHTML('beforeend', popupHTML);
    setTimeout(() => {
      document.querySelector('.popup').remove();
    }, 1000);
  }

  createTodoElement(todoText) {
    const todoHTML = `<div class='todo' onclick='app.removeTodo(${this.todoArray.length - 1})'>${todoText}</div>`;
    this.inputContainer.insertAdjacentHTML('beforeend', todoHTML);
  }

  clearTodoElements() {
    const todos = document.querySelectorAll('.todo');
    todos.forEach(todo => todo.remove());
  }
}

const app = new TodoApp();

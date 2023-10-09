// let todoinputer;
// let htmlelement;
// let todoarray = [];

// const todoadder = () => {
//   todoinputer = document.querySelector('#todoinput').value;
//   if (todoinputer.trim() == '' || todoinputer.trim() == null) {
//     let html = `<div class="popup">
//                         <span class="popuptext show" id="myPopup"> 
//                         This field is empty 
//                         </span>
//                     </div>`;
//     document.querySelector('.inputcontaier').innerHTML += html;
//     setTimeout(() => {
//       document.querySelector('.popup').remove();
//     }, 1000);
//   } else if (todoarray.includes(todoinputer.trim())) {
//     let html = `<div class="popup">
//                         <span class="popuptext show" id="myPopup"> 
//                         This todo is inclue your todo
//                         </span>
//                     </div>`;
//     document.querySelector('.inputcontaier').innerHTML += html;
//     setTimeout(() => {
//       document.querySelector('.popup').remove();
//     }, 1000);
//   } else if (todoarray.length == 8) {
//     let html = `<div class="popup">
//                         <span class="popuptext show" id="myPopup"> 
//               Your todos full
//                         </span>
//                     </div>`;
//     document.querySelector('.inputcontaier').innerHTML += html;
//     setTimeout(() => {
//       document.querySelector('.popup').remove();
//     }, 1000);
//   } else {
//     todoarray.push(todoinputer.trim());
//     let html = ``;
//     todoarray.forEach((e, i) => {
//       html +=
//         e == todoinputer
//           ? `<div class='div' onclick='todoremove(${i})'>${e}</div>`
//           : '';
//     });
//     document.querySelector('.inputcontaier').innerHTML += html;
//     console.log(todoarray.length);
//   }
// };

// const clearlocal = () => {
//   todoarray = [];

//   for (let key of document.querySelectorAll('.div')) {
//     key.remove();
//   }
// };
// const todoremove = (index) => {
//   let myupdated = todoarray.filter((e) => {
//     return e != index;
//   });
//   document.querySelectorAll('.div')[index].remove();
//   todoarray = myupdated;
// };
// const todosorter = () => {
//   todoarray.sort((a, b) => {
//     return a - b;
//   });
//   console.log(todoarray);
//   for (let key of document.querySelectorAll('.div')) {
//     key.remove();
//   }
//   let html = ``;
//   todoarray.forEach((e, i) => {
//     html += `<div class='div' onclick='todoremove(${i})'>${e}</div>`;
//   });
//   document.querySelector('.inputcontaier').innerHTML += html;
// };

// a
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
    createTodoElement(todoInput);
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
  todoArray.splice(index, 1);
  const todoElement = document.querySelector(`#todo-${index}`);
  todoElement.remove();
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

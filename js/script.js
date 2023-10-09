let todoinputer;
let htmlelement;
let todoarray = [];

const todoadder = () => {
  todoinputer = document.querySelector('#todoinput').value;
  if (todoinputer.trim() == '' || todoinputer.trim() == null) {
    let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> 
                        This field is empty 
                        </span>
                    </div>`;
    document.querySelector('.inputcontaier').innerHTML += html;
    setTimeout(() => {
      document.querySelector('.popup').remove();
    }, 1000);
  } else if (todoarray.includes(todoinputer.trim())) {
    let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> 
                        This todo is inclue your todo
                        </span>
                    </div>`;
    document.querySelector('.inputcontaier').innerHTML += html;
    setTimeout(() => {
      document.querySelector('.popup').remove();
    }, 1000);
  } else if (todoarray.length == 8) {
    let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> 
              Your todos full
                        </span>
                    </div>`;
    document.querySelector('.inputcontaier').innerHTML += html;
    setTimeout(() => {
      document.querySelector('.popup').remove();
    }, 1000);
  } else {
    todoarray.push(todoinputer.trim());
    let html = ``;
    todoarray.forEach((e, i) => {
      html +=
        e == todoinputer
          ? `<div class='div' onclick='todoremove(${i})'>${e}</div>`
          : '';
    });
    document.querySelector('.inputcontaier').innerHTML += html;
    console.log(todoarray.length);
  }
};

const clearlocal = () => {
  todoarray = [];

  for (let key of document.querySelectorAll('.div')) {
    key.remove();
  }
};
const todoremove = (index) => {
  let myupdated = todoarray.filter((e) => {
    return e != index;
  });
  document.querySelectorAll('.div')[index].remove();
  todoarray = myupdated;
};
const todosorter = () => {
  todoarray.sort((a, b) => {
    return a - b;
  });
  console.log(todoarray);
  for (let key of document.querySelectorAll('.div')) {
    key.remove();
  }
  let html = ``;
  todoarray.forEach((e, i) => {
    html += `<div class='div' onclick='todoremove(${i})'>${e}</div>`;
  });
  document.querySelector('.inputcontaier').innerHTML += html;
};

// TODO   :  this code for localstorage
// TODO   :  this coade add enter keypress run

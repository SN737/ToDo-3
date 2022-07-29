let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let  todo = document.querySelector('.todo')


let todoList = []; 

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayMessages();
};

let check = document.querySelector('input[type=checkbox]');

 todo.addEventListener('change', (event) => {
    let valueLabel = todo.querySelector('[for='+event.target.getAttribute('id') + ']').innerHTML
    todoList.forEach ((item) => {
        if (item.todo === valueLabel){
            item.checked = !item.checked
        }
    })
    console.log(todoList);


 })

 addButton.addEventListener('click', () => {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        importan: false
    };
    todoList.push(newTodo)
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
 })

 function displayMessages() {
    let displayMessage = '';
    
    todoList.forEach((item, i) => {
        displayMessage += `
        <li>
         <input type ='checkbox' id='item_${i}' ${item.checked ? 'true' : 'false'}>
         <label for = 'item_${i}'>${item.todo}</label>
        </li>
         `;
        todo.innerHTML = displayMessage;

    })
 }

 
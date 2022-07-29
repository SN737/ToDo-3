let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let  todo = document.querySelector('.todo')

let todoList = []; 

 addButton.addEventListener('click', () => {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        importan: false
    };
    todoList.push(newTodo)
 })

 function displayMessages() {
    todo.forEach((item, i) => {
        let displayMessage = `
        <li>
         <nput type ='checkbox' id= 'item_${i}'>
         <label for = 'item_${i}'>${item.todo}</label>
        </li>
         `;
        todo.innerHTML = displayMessage;
    })
 }
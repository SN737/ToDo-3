let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let  todo = document.querySelector('.todo')


let todoList = []; 

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayMessages();
};

let delbtn = document.querySelector('.btndel');
delbtn.addEventListener('click', (event) => {
    let valueLabel = todo.querySelector('[for='+event.target.getAttribute('id') + ']').innerHTML
    alert (valueLabel)
})

 todo.addEventListener('change', (event) => {
    let valueLabel = todo.querySelector('[for='+event.target.getAttribute('id') + ']').innerHTML
    todoList.forEach ((item) => {
        if (item.todo === valueLabel){
            item.checked = !item.checked
            localStorage.setItem('todo', JSON.stringify(todoList))
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
    document.querySelector('.message').value = ''

 })

 function displayMessages() {
    let displayMessage = '';
    
    todoList.forEach((item, i) => {
        displayMessage += `
        <li>
         <input type ='checkbox' id='item_${i}' ${item.checked ? 'true' : 'false'}>
         <label for = 'item_${i}'>${item.todo}</label>
         <button class ='btndel'>удалить</button>
        </li>
         `;
        todo.innerHTML = displayMessage;

    })
 }

 function deleteMessages(){



    if (confirm('Точно удалить?')){
        todoArray = JSON.parse(localStorage.getItem(todo));
        const newList = todoArray.filter(obj => obj.id != item.id);
        localStorage.setItem(key, JSON.stringify(newList));
            
    
    item.remove();}

 }
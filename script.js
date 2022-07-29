let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let  todo = document.querySelector('.todo');



const disableButton = () => {document.querySelector('.add').disabled = true;};
disableButton();

addMessage.addEventListener('input', () => {
    if(addMessage.value.length < 1){
        disableButton();
    } else{
    document.querySelector('.add').disabled = false;}
  });





let todoList = []; 

if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
    
}




  

 todo.addEventListener('change', (event) => {
    let valueLabel = todo.querySelector('[for='+event.target.getAttribute('id') + ']').innerHTML;
    todoList.forEach ((item) => {
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
                }
    });
    
    displayMessages();


 });

 addButton.addEventListener('click', () => {
    if (addMessage.value.length > 0) {
       //addButtonState.disabled = !addButtonState.disabled
        document.querySelector('.add').disabled = false;
    } 
    


    let newTodo = {
        todo: addMessage.value,
        checked: false,
        importan: false, 
        idn: ''
    };
    todoList.push(newTodo);
    
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    document.querySelector('.message').value = '';

 });

 function displayMessages() {
    
    let displayMessage = '';
    
    todoList.forEach((item, i) => {
        displayMessage += `
        <li>
         <input type ='checkbox' id='item_${i}' ${item.checked ? 'true' : 'false'}>
         <label id = ${i} for = 'item_${i}'>${item.todo}</label>
         <button id = '${i}' class = 'btndel'>удалить</button>
        </li>
         `;
        todo.innerHTML = displayMessage;
        item.idn = i;
       

    });
 }

 function deleteMessages(idn){
      

    if (confirm('Точно удалить?')){
        todoList = JSON.parse(localStorage.getItem('todo'));
        console.log (idn);
        const newList = todoList.filter(obj => obj.idn != idn);
        localStorage.setItem('todo', JSON.stringify(newList));
        todoList = JSON.parse(localStorage.getItem('todo'));
       displayMessages();
    
    //item.remove();}
    }
 }

 todo.addEventListener('contextmenu', (e) => {
   e.preventDefault();
 });


 // if (localStorage.getItem('todo')) {

todo.addEventListener('click', (e) => {
    if (e.target.className != 'btndel') {
        return;}
        let idn = e.target.getAttribute ('id');
    deleteMessages(idn);
});
// }

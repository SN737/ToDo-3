let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');
let idCounter = idCount();



function idCount(){
    if (localStorage.getItem('idCounter')){
        alert ('B LS есть значение ');
        return  JSON.parse(localStorage.getItem('idCounter'));
    }else { alert ('B LS добавляем значение ');
       let  idCounter = 0;
    localStorage.setItem('idCounter', JSON.stringify(idCounter));
        return idCounter; }
    
}




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
    
    displayMessages(idCounter);


 });

 addButton.addEventListener('click', () => {
    if (addMessage.value.length > 0) {
       //addButtonState.disabled = !addButtonState.disabled
        document.querySelector('.add').disabled = false;
    } 
    
    let idCounter = idCount() + 1;

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        importan: false, 
        idn: ''
    };
    todoList.push(newTodo);
   
    alert( idCounter);
    localStorage.setItem('idCounter', JSON.stringify(idCounter));
    
    displayMessages(idCounter);
    localStorage.setItem('todo', JSON.stringify(todoList));
    document.querySelector('.message').value = '';

 });

 function displayMessages(idCounter) {
    
    let displayMessage = '';
    
    
    todoList.forEach((item, i) => {
       if (JSON.parse(localStorage.getItem('todo'.idn) === null))
            {item.idn = JSON.parse(localStorage.getItem('idCounter'));
        } else {  
            item.idn = JSON.parse(localStorage.getItem('todo'.idn));

        }
        
        displayMessage += `
        <li>
         <input type ='checkbox' id='item_${i}' ${item.checked ? 'true' : 'false'}>
         <label id = ${i} for = 'item_${i}'>${item.todo}</label>
         <button id = '${item.idn}' class = 'btndel'>удалить</button>
        </li>
         `;
        todo.innerHTML = displayMessage;
        
        console.log(item.idn)
        //localStorage.setItem('todo', JSON.stringify(item.idn));
       

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

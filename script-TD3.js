let todoArray = []; 
let key = 'Todo-M4';
let id = 0;
const addMessage = document.querySelector('.input');
const addButton = document.querySelector('.addbtn');
const todo = document.querySelector('.todo')

checkLocalstorage();

addMessage.addEventListener('input', () => {
    if(!addMessage.value.length){
        addButton.disabled = true;
    } else{
        addButton.disabled = false;}
       
});


addButton.addEventListener('click', () => {
    
    createToDoItem(addMessage.value);
    
});


function checkLocalstorage() {
    let localStorageData = localStorage.getItem(key);
        if (localStorageData == null) {
            todoArray = [];
            } else {
                todoArray =  JSON.parse(localStorage.getItem(key));
                console.log(todoArray);
                for (const obj of todoArray) {
                let toDoName = obj.name;
                let idFromlocalstorage = obj.id;
                displayMessages(toDoName, idFromlocalstorage);}
            }


}

function createToDoItem(name, idFromlocalstorage) {

   
    
    

    const createItem = (arr) => {
        const itemObj = {};
        itemObj.name = addMessage.value;
        itemObj.id = id;
        //itemObj.done = completeTodoItem;
        itemObj.done = false;

        arr.push(itemObj);

    };
    createItem(todoArray);
    localStorage.setItem(key, JSON.stringify(todoArray));
    

    addMessage.value ='';
    displayMessages();


   
  };

  function displayMessages(name, idFromlocalstorage){

     // switch(idFromlocalstorage) {
    //     case true: 
    //     id = idFromlocalstorage;
    //     break;
    //     case false: 
    //     id = id + 1;
    //     break;

    // }

    const tdItem = document.createElement('li');
    const btnWrapper = document.createElement('div');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    doneBtn.textContent = 'готово';
    deleteBtn.textContent = 'удалить';
    tdItem.textContent = name;
    btnWrapper.append(doneBtn, deleteBtn);
    deleteBtn.classList.add('btndel');
    doneBtn.classList.add('btndel');

    tdItem.append(btnWrapper);
    todo.append(tdItem);

    return {
        tdItem,
        doneBtn,
        deleteBtn, 
        btnWrapper
    };

  }

    


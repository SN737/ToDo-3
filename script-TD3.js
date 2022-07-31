let todoArray = []; 
let key = 'Todo-M4';
let id = 0;
const addMessage = document.querySelector('.input');
const addButton = document.querySelector('.addbtn');
const todo = document.querySelector('.todo')



addMessage.addEventListener('input', () => {
    if(!addMessage.value.length){
        addButton.disabled = true;
    } else{
        addButton.disabled = false;}
       
});


addButton.addEventListener('click', () => {
    checkLocalstorage();
    createToDoItem(addMessage.value);
    
});


function checkLocalstorage() {
    let localStorageData = localStorage.getItem(key);
        if (localStorageData == null) {
            todoArray = [];
            } else {
                todoArray = JSON.parse(localStorageData);
            }

}


const createToDoItem = (name) => {

    alert(name);
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

    const createItem = (arr) => {
        const itemObj = {};
        itemObj.name = addMessage.value;
        itemObj.id = id + 1;
        //itemObj.done = completeTodoItem;
        itemObj.done = false;

        arr.push(itemObj);

    };
    createItem(todoArray);
    localStorage.setItem(key, JSON.stringify(todoArray));
    todo.append(tdItem);

    addMessage.value ='';



    return {
        tdItem,
        doneBtn,
        deleteBtn, 
        btnWrapper
    };
  };

  

    


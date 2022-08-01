
let key = 'Todo-M4';
let id = 0;
const addMessage = document.querySelector('.input');
const addButton = document.querySelector('.addbtn');
const wrapper = document.querySelector('.wrapper');

let  todo = document.querySelector('.todo');
let todoArray = checkLocalstorage();


//checkLocalstorage();

function idCounter(){
    let localStorageData = localStorage.getItem(key+'id');
    if (localStorageData !== null) {
       let arr =  JSON.parse(localStorage.getItem(key+'id'));
        id = arr;
        return id;}
}


function markAsDone(doneBtn, tdItem){
    doneBtn.addEventListener('click', ()=> {
        tdItem.classList.toggle('done');
        let currentId = doneBtn.getAttribute('id');
        let arr =  JSON.parse(localStorage.getItem(key));
       // alert ('читаем массив',  arr);
        console.log (arr,  'arr');
        
       arr.map(obj => {
            if (currentId == obj.id & obj.done === false){
                obj.done = true;
                
            }else if (obj.id == currentId & obj.done === true) {
                obj.done = false;}
                } );
            

        localStorage.setItem(key, JSON.stringify(arr));  
        });

        //const newArr = arr.filter(obj => obj.id != item.id);
}


addMessage.addEventListener('input', () => {
    if(!addMessage.value.length){
        addButton.disabled = true;
    } else{
        addButton.disabled = false;}  
});

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    createToDoItem(addMessage.value);
    addButton.disabled = true;
    todo.remove();
    checkLocalstorage();
    
});


function checkLocalstorage() {
    ////alert ('рисуем пустую тудуху')
    todo = document.createElement('ul');
    todo.classList.add('todo');
    wrapper.append(todo);
        
    let localStorageData = localStorage.getItem(key);
        if (localStorageData == null) {
            //alert ('данных нет идём сюда')
            return [];
            
            } else {
                //alert ('данные есть идём сюда')
                let todoArray =  JSON.parse(localStorage.getItem(key));
                //console.log(todoArray);
                                
                for (const obj of todoArray) {
                    let toDoName = obj.name;
                    let idFromlocalstorage = obj.id;
                    let done = obj.done;
                //alert ('идём рисовать тудуху');
                     const todoItem = displayMessages(toDoName, idFromlocalstorage, done);
                    markAsDone(todoItem.doneBtn, todoItem.tdItem);
                }
                return todoArray;
            }
}

function createToDoItem(name, idFromlocalstorage) {

    idCounter();
    id = id + 1;
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
   
    localStorage.setItem(key+'id', JSON.stringify(id));

    addMessage.value ='';
}

  function displayMessages(name, idFromlocalstorage, done){
    
    //alert ('пришли - рисуем')

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
    tdItem.setAttribute('id', idFromlocalstorage);
    doneBtn.setAttribute('id', idFromlocalstorage);
    deleteBtn.setAttribute('id', idFromlocalstorage);
    
    tdItem.append(btnWrapper);
    todo.append(tdItem);

    if (done) {
        tdItem.classList.add('done');
    }

    return {
        tdItem,
        doneBtn,
        deleteBtn, 
        btnWrapper
    };

}



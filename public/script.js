//Global Variables
let todo;
// Selectors 
const todoList = document.querySelector('.todo-list');
getStoredValue();
const inputBox = document.querySelector('.inputs input');
const addBtn = document.querySelector('.inputs button');
const todoItem = document.querySelector('.todo-list .todo')
const deleteBtn = document.querySelector('.todo-list .todo li button');
const clearAllBtn = document.querySelector('footer button')
// Listener
addBtn.addEventListener('click',function(){
    let getlocalStorage = localStorage.getItem("Todo");
    if(getlocalStorage == null){
        todo = [];
    }else{
        todo = JSON.parse(getlocalStorage)
    }
    todo.push(inputBox.value);
    localStorage.setItem("Todo",JSON.stringify(todo));
    showItem(1);
    inputBox.value = ""
})
clearAllBtn.onclick = ()=>{
    todo = []
    localStorage.setItem("Todo",JSON.stringify(todo));
    getStoredValue();
}
if(deleteBtn != null)
    deleteBtn.addEventListener('click',(e)=>{
        log(e.target)
    })

function log(i){
    console.log(i)
}
function getStoredValue(){
    let data = localStorage.getItem("Todo");
    if(data==null){
        todo = []
    }else{
        todo = JSON.parse(data);
        showItem(2);
    }
}
function showItem(e){
    let newTag = ``;
    todo.forEach((element,index) => {
        newTag += ` <div class="todo">
        <li><span>${element}</span><button onClick="deleteDo(${index})";><i class="fa fa-trash" aria-hidden="true"></i></button></li>
        </div>`;
    });
    todoList.innerHTML = newTag;
}
function deleteDo(index){
    let getlocalStorage = localStorage.getItem("Todo");
    todo = JSON.parse(getlocalStorage);
    todo.splice(index,1);
    localStorage.setItem("Todo",JSON.stringify(todo));
    getStoredValue();
}

function removeAllChild(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
{/* <div class="todo">
<li><span>HEllo</span><button><i class="fa fa-trash" aria-hidden="true"></i></button></li>
</div> */}
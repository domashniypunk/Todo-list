const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please, write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(click){
    if(click.target.tagName === "LI"){
        click.target.classList.toggle("checked");
        saveData();
    }
    else if(click.target.tagName === "SPAN"){
        click.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);   
}

function showTaskList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaskList();
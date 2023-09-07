let inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '-' + dd + '-' + yyyy;
let abc  ="("+ today.toString()+")"

function addTask(){
    if (inputBox.value === ''){
        //alert("You Must Write Something!")
        swal("Oh NO!", "You Must Write Something!", "error");
    }else{
        console.log(inputBox.value + " " +abc)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + " " +abc;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

    }
    inputBox.value =""
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask (){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();
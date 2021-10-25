// Getting title from session for Edit-task
var title = sessionStorage.getItem("title");


// Setting title empty in session storage
sessionStorage.setItem("title", "");


// Getting dictionary from storage
var dict = JSON.parse(sessionStorage.getItem("dict"));


// If dictionary is empty then create new dictionary
if(dict == null){
    dict = {}
}


//printing today's date
today = new Date();
var todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("taskDate").value = todayDate;

var todayTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("taskTime").value = todayTime;

// If title is exist[For edit-task]
if(title != null){
    document.getElementById("Title").value = title;
    if(title != ""){
        document.getElementById("Detail").value = dict[title]["discription"];
        document.getElementById("taskDate").value = dict[title]["date"];
        document.getElementById("taskTime").value = dict[title]["time"];
    }
    delete dict[title];
}


// For adding task to the dictionary
function addTask(){

    key = document.getElementById("Title").value;
    discription = document.getElementById("Detail").value;
    taskDate = document.getElementById("taskDate").value;
    taskTime = document.getElementById("taskTime").value;

    dict[key] = {
        "discription" : discription,
        "date" : taskDate,
        "time" : taskTime
    };
    
    sessionStorage.setItem("dict", JSON.stringify(dict));

    window.location.href = "home.html";
}

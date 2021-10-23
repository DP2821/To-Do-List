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


// If title is exist[For edit-task]
if(title != null){
    document.getElementById("Title").value = title;
    if(title != "")
        document.getElementById("Detail").value = dict[title];
    delete dict[title];
}


// For adding task to the dictionary
function addTask(){
    key = document.getElementById("Title").value;
    value = document.getElementById("Detail").value;

    dict[key] = value;
    
    sessionStorage.setItem("dict", JSON.stringify(dict));

    window.location.href = "home.html";
}
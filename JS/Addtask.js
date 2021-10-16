var title = sessionStorage.getItem("title");

sessionStorage.setItem("title", "");

var dict = JSON.parse(sessionStorage.getItem("dict"));

if(dict == null){
    dict = {}
}


if(title != null){
    document.getElementById("Title").value = title;
    if(title != "")
        document.getElementById("Detail").value = dict[title];
    delete dict[title];
}



function addTask(){
    key = document.getElementById("Title").value;
    value = document.getElementById("Detail").value;

    
    dict[key] = value;
    
    sessionStorage.setItem("dict", JSON.stringify(dict));

    window.location.href = "home.html";
}

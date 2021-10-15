var title = sessionStorage.getItem("title");

sessionStorage.setItem("title", "");

var dict = JSON.parse(sessionStorage.getItem("dict"));

if(dict == null){
    dict = {}
}


document.write("<link rel=\"stylesheet\" href=\"Addtask.css\">");

document.write("<div class=\"main\">" +
"<div class=\"Title\">" +
    "<input class=\"title\" id=\"Title\" type=\"text\" placeholder=\"Title\">" +

    "<textarea class=\"detail\" id=\"Detail\" type=\"text\" placeholder=\"Start Write...\"></textarea>" +
    "</textarea>" +
"</div>" +

"<div class=\"btn\">" +
    "<button class=\"addtaskbtn\" onclick=\"addTask()\">Add Task</button>" +
"</div>" +
"</div>")



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

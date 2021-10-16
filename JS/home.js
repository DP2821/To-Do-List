var dict = JSON.parse(sessionStorage.getItem("dict"));


document.write("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">");

document.write("<div class=\"search\">" +
    "<input class=\"searchtext\" type=\"text\" placeholder=\"Search..\" id=\"search\">" +
    "<button class=\"searchbtn\" onclick=\"searchTask()\" type=\"submit\"><i class=\"fa fa-search btnsearch\"></i></button>" +
    "</div>");


document.write("<div class=\"addtask\">" +
    "<button class=\"addbtn\" onclick =\"addList()\">+</button></div>");


for(var x in dict){
    document.write("<div class=\"" + x + "\">" +
        "<div class=\"main\">" +
    "<div class=\"title\">" +
        x +
        "<div class=\"detail\">" +
            dict[x] +
        "</div>" +
    "</div>" +

    "<div class=\"button\">" +
        "<button class=\"btn1\" onclick=\"editTask('" + x + "')\">Edit</button>" +
        "<button class=\"btn2\" onclick=\"deleteTask('" + x + "')\">Delete</button>" +
    "</div>" +
    "</div>" +
"</div>");
}
    

function searchTask(){
    var dict = JSON.parse(sessionStorage.getItem("dict"));
    var searchtodolist = document.getElementById("search").value;
    var flag = 0;
    for(var i  in dict){
        if(i == searchtodolist){
            flag = 1;
            sessionStorage.setItem("searchtodolist", searchtodolist );
            window.location = "search.html";
        }
    }
    if(flag == 0){
        alert("Sorry search result is not available");
    }
}
    
function addList(){
    window.location.href = "Addtask.html";
}

function editTask(title,discription){
    
    sessionStorage.setItem("title", title);

    window.location.href = "Addtask.html";
    
}

function deleteTask(title){

    
    delete dict[title];
    sessionStorage.setItem("dict", JSON.stringify(dict));
    const pizza = document.querySelector("." + title);
    pizza.style.visibility = 'hidden';

    location.reload(true);
    
}
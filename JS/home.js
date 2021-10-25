// dictionary for store Title and discription
var dict = JSON.parse(sessionStorage.getItem("dict"));


// CSS for searchbar
document.write("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">");


// Searchbar
document.write("<div class=\"search\">" +
    "<input class=\"searchtext\" type=\"text\" placeholder=\"Search..\" id=\"search\">" +
    "<button class=\"searchbtn\" onclick=\"searchTask()\" type=\"submit\"><i class=\"fa fa-search btnsearch\"></i></button>" +
    "</div>");


// Add-task button
document.write("<div class=\"addtask\">" +
    "<button class=\"addbtn\" onclick =\"addList()\">+</button></div>");


// Writing all to-do-list
for(var x in dict){
    document.write("<div class=\"" + x + "\">" +
        "<div class=\"main\">" +
    "<div class=\"title\">" +
        x +
        "<div class=\"detail\">" +
            dict[x]["discription"] +
        "</div>" +

        

        "<div class=\"date\">"+
            dict[x]["date"] + 
        "</div>"+

        "<div class=\"time\">"+
            dict[x]["time"]+
        "</div>"+



    "</div>" +
    
    "<div class=\"button\">" +
        "<button class=\"btn1\" onclick=\"editTask('" + x + "')\">Edit</button>" +
        "<button class=\"btn2\" onclick=\"deleteTask('" + x + "')\">Delete</button>" +
    "</div>" +
    "</div>" +
"</div>");
}
    

// For searching task
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
    

// Go to Addtask page
function addList(){
    window.location.href = "Addtask.html";
}


// Edit particular task
function editTask(title){
    
    sessionStorage.setItem("title", title);

    window.location.href = "Addtask.html";
}


// Edit particular task
function deleteTask(title){
   
    delete dict[title];
    sessionStorage.setItem("dict", JSON.stringify(dict));
    const pizza = document.querySelector("." + title);
    pizza.style.visibility = 'hidden';

    location.reload(true);    
}

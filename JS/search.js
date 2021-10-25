// Getting dictionary from storage
var dict = JSON.parse(sessionStorage.getItem("dict"));


// Getting searched list's title from storage
var searchtodolist = sessionStorage.getItem("searchtodolist");


// CSS
document.write("<link rel=\"stylesheet\" href=\"search.css\">");


// Showing searched list
document.write("<div class=\"" + searchtodolist + "\">" +
    "<div class=\"main\">" +
    "<div class=\"title\">" +
    searchtodolist +
        "<div class=\"detail\">" +
            dict[searchtodolist]["discription"] +
        "</div>" +



        "<div>"+
            dict[searchtodolist]["date"] + 
        "</div>"+

        "<div>"+
            dict[searchtodolist]["time"]+
        "</div>"+



    "</div>" +

    "<div class=\"button\">" +
        "<button class=\"btn1\" onclick=\"editTask('" + searchtodolist + "')\">Edit</button>" +
        "<button class=\"btn2\" onclick=\"deleteTask('" + searchtodolist + "')\">Delete</button>" +
    "</div>" +
    "</div>" +
    "</div>");



// For edit-task
function editTask(title,discription){

    sessionStorage.setItem("title", title);

    window.location.href = "Addtask.html";
}
    

// For delete task
function deleteTask(title){

    delete dict[title];
    sessionStorage.setItem("dict", JSON.stringify(dict));
    const titleDoc = document.querySelector("." + title);
    titleDoc.style.visibility = 'hidden';
    
    window.location.href = "home.html";   
}

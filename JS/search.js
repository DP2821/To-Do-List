var dict = JSON.parse(sessionStorage.getItem("dict"));

var searchtodolist = sessionStorage.getItem("searchtodolist");

document.write("<link rel=\"stylesheet\" href=\"search.css\">");

document.write("<div class=\"" + searchtodolist + "\">" +
    "<div class=\"main\">" +
    "<div class=\"title\">" +
    searchtodolist +
        "<div class=\"detail\">" +
            dict[searchtodolist] +
        "</div>" +
    "</div>" +

    "<div class=\"button\">" +
        "<button class=\"btn1\" onclick=\"editTask('" + searchtodolist + "')\">Edit</button>" +
        "<button class=\"btn2\" onclick=\"deleteTask('" + searchtodolist + "')\">Delete</button>" +
    "</div>" +
    "</div>" +
    "</div>");


    function editTask(title,discription){
    
        sessionStorage.setItem("title", title);
    
        window.location.href = "Addtask.html";
        
    }
    
    function deleteTask(title){
    
        
        delete dict[title];
        sessionStorage.setItem("dict", JSON.stringify(dict));
        const pizza = document.querySelector("." + title);
        pizza.style.visibility = 'hidden';
        
        window.location.href = "home.html";
        
    }
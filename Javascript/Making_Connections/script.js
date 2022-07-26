function changeName () {
    var newName = document.querySelector("#name");

    newName.innerHTML = "Mike Mason";
}

function remove (element) {
    var connection1 = document.querySelector("#con1");
    var connection2 = document.querySelector("#con2");
    var connectionCount = document.querySelector("#conCount");
    var Yourconnection = document.querySelector("#yourConnections");


    if (element == 1 || element == 2) {
        connection1.remove();
        if(connectionCount.innerHTML == "1") {
            connectionCount.innerHTML = "0";
        } else {
            connectionCount.innerHTML = "1";
        } 

        if(element == 1) {
            if(Yourconnection.innerHTML == "418") {
                Yourconnection.innerHTML = "419";
            } else {
                Yourconnection.innerHTML = "420";
            } 
        }
    }
    else if (element == 3 || element == 4) {
        connection2.remove();
        if(connectionCount.innerHTML == "1") {
            connectionCount.innerHTML = "0";
        } else {
            connectionCount.innerHTML = "1";
        } 
        if(element == 3) {
            if(Yourconnection.innerHTML == "418") {
                Yourconnection.innerHTML = "419";
            } else {
                Yourconnection.innerHTML = "420";
            } 
        }
    }
}


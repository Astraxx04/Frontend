function sayHello(event){
    this.textContent="Said it";
    var name = document.getElementById("name").value;
    var message = "<h2>Hello "+ name + "!</h2>";
    document.getElementById("content").innerHTML=message;

    if(name==="student" || name==="Student"){
        title="Yo bro whats uppp??";
        document.getElementById("title").textContent=title;   
    }
    else{
        title="Hello. Welcome back!";
        document.getElementById("title").textContent=title;
    }

}

document.querySelector("button").onclick = sayHello;

document.getElementById("login_btn").onclick = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username+password);

    if( username === "paresh" && password ==="kadam"){
        sessionStorage.setItem("login","true");
        console.log("us kadam");
        window.location = "http://127.0.0.1:5500/todo.html";
    }
}
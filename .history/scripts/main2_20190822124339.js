
document.getElementById("login_btn").onclick = () => {
    var username = document.getElementById("login_user_input").value;
    var password = document.getElementById("login_password_input").value;

    if( username === "paresh" && password ==="kadam"){
        console.log("")
        window.location = "http://127.0.0.1:5500/todo.html"
    }
}
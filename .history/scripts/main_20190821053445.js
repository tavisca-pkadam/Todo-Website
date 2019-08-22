let todoDictionary = {}

localStorage.setItem("todoDictionary", todoDictionary)


document.getElementById("todo_content_add").onclick= () => {
    console.log("todo_content_add clicked");
    document.getElementById("todo_add_modal").style.visibility = "visible";
};

document.getElementById("todo_add_modal_add_btn").onclick = () => {
    console.log("todo_add_modal_add_btn");
    
    if(todo_add_modal_input_text)
    document.getElementById("todo_add_modal").style.visibility = "hidden";
}
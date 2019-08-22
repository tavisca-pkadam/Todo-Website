let todoDictionary = {}
let sequence_no = 
localStorage.setItem("todoDictionary", todoDictionary)


document.getElementById("todo_content_add").onclick= () => {
    console.log("todo_content_add clicked");
    document.getElementById("todo_add_modal").style.visibility = "visible";
};

document.getElementById("todo_add_modal_add_btn").onclick = () => {
    console.log("todo_add_modal_add_btn");
    if(to)
    console.log(document.getElementById("todo_add_modal_input_text").value);
    document.getElementById("todo_add_modal").style.visibility = "hidden";
}
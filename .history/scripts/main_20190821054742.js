let todoDictionary = {}
let sequence = {}
localStorage.setItem("todoDictionary", todoDictionary)
localStorage.setItem("sequence", sequence)


document.getElementById("todo_content_add").onclick= () => {
    console.log("todo_content_add clicked");
    document.getElementById("todo_add_modal").style.visibility = "visible";
};

document.getElementById("todo_add_modal_add_btn").onclick = () => {
    console.log("todo_add_modal_add_btn");
    let input_data = document.getElementById("todo_add_modal_input_text").value;
    if(input_data.length > 0) {
        tod
    }

    document.getElementById("todo_add_modal").style.visibility = "hidden";
}
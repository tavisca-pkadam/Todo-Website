let todoDictionary = {}
let sequence = 0

localStorage.setItem("todoDictionary", todoDictionary)
localStorage.setItem("sequence", sequence)


document.getElementById("todo_content_add").onclick= () => {
    console.log("todo_content_add clicked");
    document.getElementById("todo_add_modal").style.visibility = "visible";
};

document.getElementById("todo_add_modal_add_btn").onclick = () => {
    console.log("todo_add_modal_add_btn");
    if(document.getElementById("todo_add_modal_input_text").value.length > 0) {
        todoDictionary[sequence.toString()] = document.getElementById("todo_add_modal_input_text").value;
        sequence+=1;
    }
    document.getElementById("todo_add_modal").style.visibility = "hidden";
    let input_data = document.getElementById("todo_add_modal_input_text").value = "";

}

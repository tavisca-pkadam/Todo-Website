let todoDictionary = {}
let sequence = 0
var input_data = "";

localStorage.setItem("todoDictionary", todoDictionary)
localStorage.setItem("sequence", sequence)


document.getElementById("todo_content_add").onclick= () => {
    console.log("todo_content_add clicked");
    document.getElementById("todo_add_modal").style.visibility = "visible";
};

document.getElementById("todo_add_modal_add_btn").onclick = () => {
    console.log("todo_add_modal_add_btn");
    var input_data = document.getElementById("todo_add_modal_input_text").value;
    if(input_data.length > 0) {
        todoDictionary[sequence.toString()] = input_data;
        sequence+=1;
    }
    document.getElementById("todo_add_modal").style.visibility = "hidden";
    document.getElementById("todo_add_modal_input_text").value = "";

}

function updateTodoList() {
    var todo_Data = "";

    for (const key in todoDIctionary) {
        if (todoDIctionary.hasOwnProperty(key)) {
            const element = todoDIctionary[key];
            todo_Data += '<div class="todo_item"><div class="todo_detail">'element \
                    '</div><div class="todo_edit_btn">Edit</div><div class="todo_remove_btn">Remove</div> </div>'
               
        }
    }
    
    document.getElementById("todo_list").innerHTML = todo_Data;

}


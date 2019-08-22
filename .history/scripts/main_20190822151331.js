let todoDictionary = {};
let sequence = 0;
let input_data = "";
let key = undefined;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => {
    let data = response.json().then(x => {
      var data = x;
      data.forEach(element => {
        todoDictionary[element["id"]] = element;
        console.log(element);
      });
    });
  })
  .catch(() => {
    console.log("error");
  });

window.onload = () => {
  if (sessionStorage.getItem("login").toString() !== "true") {
    window.location = "http://127.0.0.1:5500/login_grid.html";
  }

  (function() {
    var local_todoDictionary = JSON.parse(
      localStorage.getItem("todoDictionary")
    );
    if (local_todoDictionary !== null) {
      todoDictionary = local_todoDictionary;
    }
    var local_sequence = localStorage.getItem("sequence");
    if (local_sequence !== null) {
      sequence = parseInt(local_sequence);
    }
    updateTodoList();
  })();
};

document.getElementById("todo_content_add").onclick = () => {
  console.log("todo_content_add clicked");
  document.getElementById("todo_add_modal").style.visibility = "visible";
};

document.getElementById("todo_add_modal_add_btn").onclick = () => {
  AddTask();
};

function AddTask() {
  console.log("add click" + key);
  let input_data = document.getElementById("todo_add_modal_input_text").value;

  if (key === undefined) {
    if (input_data.length > 0) {
      todoDictionary[sequence.toString()] = input_data;
      sequence += 1;
    }
    document.getElementById("todo_add_modal").style.visibility = "hidden";
    document.getElementById("todo_add_modal_input_text").value = "";
    key = undefined;
  } else {
    if (input_data.length > 0) {
      todoDictionary[key] = input_data;
    }
    document.getElementById("todo_add_modal").style.visibility = "hidden";
    document.getElementById("todo_add_modal_input_text").value = "";
    key = undefined;
  }

  updateTodoList();
}

function updateTodoList(value = undefined) {
  console.log("updateTodoList");
  let todo_Data = "";

  if (value === undefined) {
    for (const key in todoDictionary) {
      if (todoDictionary.hasOwnProperty(key)) {
        const element = todoDictionary[key];
        todo_Data +=
          '<div class="todo_item"><div class="todo_detail">' +
          element["title"] +
          '</div><div class="todo_edit_btn">Edit</div><div class="todo_remove_btn" onclick="removeTask(' +
          key +
          ')">Remove</div> </div>';
      }
    }
  } else {
    for (const key in todoDictionary) {
      if (todoDictionary.hasOwnProperty(key)) {
        const element = todoDictionary[key];
        if ( element["title"].toLowerCase().startsWith(value.toLowerCase())) {
          todo_Data +=
            '<div class="todo_item" style="postion:absolute; width:3px">' +
            "1" +
            '<input style="postion:absolute; width:5px" type="checkbox" value="' +
            element["completed"] +
            '"></input>' +
            '<div class="todo_detail">' +
            element["title"] +
            '</div><div class="todo_edit_btn"  onclick="editTask(' +
            key +
            ')">Edit</div><div class="todo_remove_btn" onclick="removeTask(' +
            key +
            ')">Remove</div> </div>';
        }
      }
    }
  }
  document.getElementById("todo_list").innerHTML = todo_Data;

  localStorage.setItem("todoDictionary", JSON.stringify(todoDictionary));
  localStorage.setItem("sequence", sequence);
}

document.getElementById("todo_content_head_search_btn").onclick = () => {
  updateTodoList(
    document.getElementById("todo_content_head_search_input").value
  );
};

document.getElementById("todo_content_head_search_input").onchange = () => {
  updateTodoList(
    document.getElementById("todo_content_head_search_input").value
  );
};

function removeTask(id) {
  console.log("removeTask");
  delete todoDictionary[id];
  updateTodoList();
}

function editTask(id) {
  console.log("onclick Edit");
  document.getElementById("todo_add_modal").style.visibility = "visible";
  document.getElementById("todo_add_modal_input_text").value =
    todoDictionary[id];
  key = id;
}

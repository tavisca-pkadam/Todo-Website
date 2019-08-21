let todoDictionary = {}

localStorage.setItem("todoDictionary", todoDictionary)


document.getElementById("todo_content_add").onclick= () => {
    console.log("todo_content_add clicked")
    document.getElementById("todo_add_modal").style.visibility = visible;
});
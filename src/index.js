document.addEventListener("DOMContentLoaded", () => {
  //Grab all the necessary DOM elements

  const newTaskForm = document.getElementById("create-task-form");

  //attaching event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

  const createNewTask = event => {
    event.preventDefault(); 
    //above code stops the submit 
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    //console.log(newTask)

    appendNewTask(newTask);
    event.target.reset();
  };

  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };
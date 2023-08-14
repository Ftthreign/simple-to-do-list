const form = document.getElementById("form");
const input = document.getElementById("inputItem");
const addItem = document.getElementById("addButton");
const listDiv = document.getElementById("taskList");
const isFill = document.getElementById("isFill");

const addList = () => {
  const taskContext = input.value;
  if (taskContext != "") {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = taskContext;

    const checkTask = document.createElement("button");
    checkTask.textContent = "Check";
    checkTask.classList.add("checkButton");

    const divContainer = document.createElement("div");
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Clear";
    deleteItem.classList.add("deleteItem");

    divContainer.appendChild(taskText);
    divContainer.appendChild(checkTask);
    divContainer.appendChild(deleteItem);

    taskItem.appendChild(divContainer);
    listDiv.appendChild(taskItem);

    input.value = "";
    isFill.textContent = "";
  } else {
    isFill.textContent = "Task Tidak boleh Kosong!!";
  }
};

addItem.addEventListener("click", addList);

listDiv.addEventListener("click", (addEvent) => {
  if (addEvent.target.classList.contains("checkButton")) {
    const taskItem = addEvent.target.parentElement;
    taskItem.classList.toggle("completed");
  } else if (addEvent.target.classList.contains("deleteItem")) {
    const taskItemList = addEvent.target.parentElement.parentElement;
    listDiv.removeChild(taskItemList);
  }
});

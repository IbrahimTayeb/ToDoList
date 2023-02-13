const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

addButton.addEventListener("click", function() {
  const todoValue = todoInput.value;
  if (!todoValue) return;
  
  const todoItem = document.createElement("li");
  todoItem.innerText = todoValue;
  todoList.appendChild(todoItem);
  
  todoInput.value = "";
});

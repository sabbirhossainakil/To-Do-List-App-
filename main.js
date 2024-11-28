
// Selecting the input field with the ID "new-todo-item" from the DOM
const newTodoItem = document.getElementById("new-todo-item");

// Selecting the button with the ID "add-todo-btn" from the DOM
const addTodoBtn = document.getElementById("add-todo-btn");

// Selecting the unordered list (UL) with the ID "todo-list" from the DOM
const todoList = document.getElementById("todo-list");

// Function to add a new todo item to the list
function addTodo() {
  // Checking if the input field is empty
  if (newTodoItem.value === "") {
    alert("Please enter a todo item"); // Displaying an alert if the input is empty
  } else {
    // Creating a new <li> element for the todo item
    const todoItem = document.createElement("li");
    // Setting the content of the <li> to the value from the input field
    todoItem.innerHTML = newTodoItem.value;
    // Appending the new <li> to the UL element
    todoList.appendChild(todoItem);

    // Creating a <span> element to represent a "close" button
    const span = document.createElement("span");
    // Setting the content of the <span> to the "×" character
    span.innerHTML = "&#10006;";
    // Adding a "close" class to the <span> for styling
    span.className = "close";
    // Appending the <span> to the <li> as a delete button
    todoItem.appendChild(span);

    // Adding an onclick event listener to the <span> to handle delete functionality
    span.onclick = function () {
      // Removing the parent <li> element
      this.parentElement.remove();
      // Saving updated data to localStorage
      saveData();
    };

    // Clearing the input field for the next entry
    newTodoItem.value = "";
    // Saving updated data to localStorage
    saveData();
  }
}

// Function to save the current list data to localStorage
function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

// Function to load saved data from localStorage on page load
function loadData() {
  // Retrieving data from localStorage
  const savedData = localStorage.getItem("data");
  // If there's saved data, set it as the innerHTML of the todoList
  if (savedData) {
    todoList.innerHTML = savedData;
    // Adding delete functionality to existing items
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach((btn) => {
      btn.onclick = function () {
        this.parentElement.remove();
        saveData();
      };
    });
  }
}

// Loading saved data when the page loads
loadData();

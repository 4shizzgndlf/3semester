document.addEventListener("DOMContentLoaded", initApp);

const BASE_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";

async function initApp() {
    const todos = await fetchTodos();
    displayTodos(todos);

    document.querySelector("#todoForm").addEventListener("submit", handleFormSubmit);
}

async function fetchTodos() {
  try {
    const response = await fetch(`${BASE_URL_TODOS}`);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    const todos = await response.json();

    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function displayTodos(todos) {
    const tableBody = document.getElementById("todoTableBody");
    tableBody.innerHTML = ""; // Clear existing rows
    for (const todo of todos) {
        renderTodoRow(todo);
    }
}

function renderTodoRow(todo) {
  const tableBody = document.getElementById("todoTableBody");

  // Create the row
  const row = document.createElement("tr");
  row.setAttribute("data-id", todo.id);

  // Create title cell
  const titleCell = document.createElement("td");
  titleCell.textContent = todo.title;

  // Create user ID cell
  const userIdCell = document.createElement("td");
  userIdCell.textContent = todo.userId;

  // Create completed cell
  const completedCell = document.createElement("td");
  completedCell.textContent = todo.completed ? "Yes" : "No";

  // Create actions cell
  const actionsCell = document.createElement("td");

  // Create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("btn", "btn-warning");
  editButton.setAttribute("data-action", "edit");

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.setAttribute("data-action", "delete");

  // Add buttons to actions cell
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);

  // Add cells to row
  row.appendChild(titleCell);
  row.appendChild(userIdCell);
  row.appendChild(completedCell);
  row.appendChild(actionsCell);

  // Add row to table
  tableBody.appendChild(row);
}

async function addTodo(todo) {
  try {
    const response = await fetch(`${BASE_URL_TODOS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    });

    if (!response.ok) {
      throw new Error("Failed to add todo");
    }

    const newTodo = await response.json();

    return newTodo;
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const title = form.get("title");
    const userId = Number(form.get("userId"));
    const completed = form.get("completed") === "on"; // Checkbox value
    
    const newTodo = {
        title,
        userId,
        completed
    };
    const createdTodo = await addTodo(newTodo);
    console.log("Created todo:", createdTodo);
    // Optionally, you can add the new todo to the table without refetching all todos renderTodoRow(createdTodo)
    renderTodoRow(createdTodo);

    event.target.reset(); // Clear the form
}
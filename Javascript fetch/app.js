document.addEventListener("DOMContentLoaded", initApp);

const BASE_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";

async function initApp() {
  const todos = await fetchTodos();
  displayTodos(todos);

  document
    .querySelector("#todoForm")
    .addEventListener("submit", handleFormSubmit);
  document
    .querySelector("#todoTableBody")
    .addEventListener("click", handleTableClick);
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
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

    const id = form.get("id");
    const title = form.get("title");
    const userId = Number(form.get("userId"));
    const completed = form.get("completed") === "on";

    const todoData = {
        title,
        userId,
        completed
    };

    if (id) {
        // Update existing todo
        const updatedTodo = await updateTodo(id, todoData);

        console.log("Updated todo:", updatedTodo);

        if (updatedTodo) {
            // Find the row with this todo ID
            const row = document.querySelector(`tr[data-id="${id}"]`);

            if (row) {
                // Update title
                row.children[0].textContent = updatedTodo.title;

                // Update user ID
                row.children[1].textContent = updatedTodo.userId;

                // Update completed
                row.children[2].textContent = updatedTodo.completed
                    ? "Yes"
                    : "No";
            }
        }

    } else {
        // Add new todo
        const createdTodo = await addTodo(todoData);

        console.log("Created todo:", createdTodo);

        if (createdTodo) {
            renderTodoRow(createdTodo);
        }
    }

    event.target.reset();

    document.querySelector("#todoId").value = "";
}

async function deleteTodo(id) {
  try {
    const response = await fetch(`${BASE_URL_TODOS}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    return true;
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

async function handleTableClick(event) {
    const action = event.target.getAttribute("data-action");
    const row = event.target.closest("tr");
    const id = row.getAttribute("data-id");
    if (action === "delete") {
        await deleteTodo(id);
        // Optionally, remove the row from the table
        // row.remove();
    } else if (action === "edit") {
        // Populate form with existing todo data
        const title = row.children[0].textContent;
        const userId = row.children[1].textContent;
        const completed = row.children[2].textContent === "Yes";

        // Use .value for inputs and .checked for checkbox
        document.querySelector("#todoId").value = id; // hidden input to store the ID of the todo being edited
        document.querySelector("#todoTitle").value = title;
        document.querySelector("#userId").value = userId;
        document.querySelector("#completed").checked = completed;

    }
}

async function updateTodo(id, updatedTodo) {
  try {
    const response = await fetch(`${BASE_URL_TODOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTodo)
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    const updatedData = await response.json();
    return updatedData;

  } catch (error) {
    console.error("Error updating todo:", error);
  }
}

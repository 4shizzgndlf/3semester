const inputEl = document.querySelector("#todo-input");
const buttonEl = document.querySelector("#add-btn");
const listEl = document.querySelector("#todo-list");
const statusEl = document.querySelector("#status");

const todos = [
  {
    text: "Relearn VSCode",
    done: true,
  },
  {
    text: "Relearn Javascript",
    done: false,
  },
  {
    text: "Learn Docker",
    done: false,
  },
];

console.log(todos);

const render = () => {
  listEl.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.done) {
      li.classList.add("done");
    }
    listEl.appendChild(li);
  }
  statusEl.textContent = `You have ${todos.filter((todo) => !todo.done).length} todos left`;
};
render();

const addTodo = (text) => {
  if (text) {
    text = text.trim();
    todos.push({
      text: text,
      done: false,
    });
    render();
    return true;
  } else if (text === "") {
    return false;
  }
};

buttonEl.addEventListener("click", () => {
    let value = inputEl.value;
    const success = addTodo(value);
    console.log(success);
    inputEl.value = "";
    inputEl.focus();
})

listEl.addEventListener("click", (event) => {
        // Find the index of the clicked <li> in the list
        const items = Array.from(listEl.children);
        const index = items.indexOf(event.target);

        if (index == -1) {
            return; // Clicked outside of a todo item
        }
        // Toggle the "done" status of the corresponding todo
        console.log("Clicked todo index:", index);
        todos[index].done = !todos[index].done;
        // Update the class of the clicked item based on the new status
        if (todos[index].done) {
            event.target.classList.add("done");
        } else {
            event.target.classList.remove("done");
        }
        render(); // Update the UI to reflect the change
    });
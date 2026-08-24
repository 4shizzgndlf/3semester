const inputEl = document.querySelector("#todo-input");
const buttonEl = document.querySelector("#add-btn");
const listEl = document.querySelector("#todo-list");
const statusEl = document.querySelector("#status");

const todos = [
  {
    text: "Relearn VSCode",
    done: false,
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
    console.log(todo);
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
  } else if (text === "") {
    return false;
  }
  render();
};

buttonEl.addEventListener("click", () => {
    let value = inputEl.value;
    addTodo(value);
})
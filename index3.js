const button = document.getElementById("button");
const input = document.getElementById("input");
const first = document.getElementById("first");
const second = document.getElementById("second");
const task1 = [];
const task2 = [];

button.addEventListener("click", () => {
  const data = input.value;

  task1.push(data);
  console.log(task1);
  first.innerHTML = "";
  displayTask();
});

const displayTask = () => {
  if (task1) {
    for (let i = 0; i < task1.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = `${task1[i]} 
      <button onclick="del(${i})">Delete</button>
      <button onclick="move(${i})">Move</button>`;
      first.appendChild(li);
      input.value = "";
    }
  }
};

const del = (i) => {
  if (window.confirm("Are you sure?")) {
    task1.splice(i, 1);
    first.innerHTML = ""; // Clear the list
    displayTask();
  }
};

const move = (i) => {
  if (window.confirm("Have you finished this task?")) {
    const completedTask = task1[i];
    task2.push(completedTask);
    console.log(task2);
    task1.splice(i, 1);
    first.innerHTML = ""; // Clear the list
    displayTask();
    displayTask2();
  }
};

const displayTask2 = () => {
  second.innerHTML = ""; // Clear the completed tasks list

  for (let i = 0; i < task2.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = task2[i];
    second.appendChild(li);
  }
};

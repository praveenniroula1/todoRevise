const button = document.getElementById("button");
const input = document.getElementById("input");
const first = document.getElementById("first");
const second = document.getElementById("second");
const task1 = [];
const task2 = [];

button.addEventListener("click", () => {
  const data = input.value;
  task1.push(data);
  display();
  input.value = "";
});

const display = () => {
  first.innerHTML = "";

  for (let i = 0; i < task1.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${task1[i]}
    <button onClick="del(${i})">Delete</button>
    <button onClick="move(${i})">Move</button>`;
    first.appendChild(li);
  }
};
const del = (i) => {
  task1.splice(i, 1);
  display();
};
const move = (i) => {
  task2.push(task1[i]);
  task1.splice(i, 1);
  display();
  secondDisplay();
};
const secondDisplay = (i) => {
  second.innerHTML = "";
  for (let i = 0; i < task2.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = task2[i];
    second.appendChild(li);
  }
};

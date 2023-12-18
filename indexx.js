const input = document.getElementById("input");
const button = document.getElementById("button");
const first = document.getElementById("first");
const second = document.getElementById("second");
const task1 = [];
const task2 = [];

const display = () => {
  first.innerHTML = "";
  for (let i = 0; i < task1.length; i++) {
    const liFirst = document.createElement("li");
    liFirst.innerHTML = `${task1[i]} 
    <button onClick="del(${i})" class="delete-button">Delete</button>
    <button onClick="move(${i})" class="move-button">Move</button>`;
    first.appendChild(liFirst);
    input.value = "";
  }
};

button.addEventListener("click", () => {
  const data = input.value;
  task1.push(data);
  //   console.log(task1);
  display();
});

const del = (i) => {
  task1.splice(i, 1);
  display();
};

const move = (i) => {
  task2.push(task1[i]);
  task1.splice(i, 1);
  secondDisplay();
  display();
};
const secondDisplay = () => {
  second.innerHTML = "";
  for (let i = 0; i < task2.length; i++) {
    const liSecond = document.createElement("li");
    liSecond.innerHTML = `${task2[i]} 
          <button onClick="task2Del(${i})" class="delete-button">Delete</button>
          <button onClick="moveBack(${i})" class="move-button">Move</button>`;
    second.appendChild(liSecond);
  }
};
const task2Del = (i) => {
  const del = task2.splice(i, 1);
  secondDisplay();
};
const moveBack = (i) => {
  task1.push(task2[i]);
  task2.splice(i, 1);
  secondDisplay();
  display();
};

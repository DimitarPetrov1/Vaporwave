let container = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
  let elements = document.createElement("div");
  elements.classList.add("line");
  container.appendChild(elements);
}

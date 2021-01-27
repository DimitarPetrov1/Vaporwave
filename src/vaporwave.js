let container = document.querySelector(".container__lines");

for (let i = 0; i < 80; i++) {
  let elements = document.createElement("div");
  elements.classList.add("line");
  container.append(elements);
}

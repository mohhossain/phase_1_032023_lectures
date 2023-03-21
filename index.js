console.log("This is the JS file");

let foods = ["pizza", "shawarma", "ice-cream"];

document.getElementsByTagName("p")[0].textContent =
  "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.";

let newP = document.createElement("p");
newP.textContent = "This is a new P tag";

let ul = document.createElement("ul");

for (let food of foods) {
  console.log(food);
  let li = document.createElement("li");
  li.textContent = food;
  ul.appendChild(li);
}

foods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  ul.appendChild(li);
});

// foods.forEach();

let div = document.querySelector("div");
div.append(newP, ul);

// div.remove();

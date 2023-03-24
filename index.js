console.log("Starting the execution!");
// we have an array of objects
// we iterate over the array
// we iterate over the objects
// we create a new element for each object
// we append it to the div with the class cat-list

// HTTP requests:
//  GET(READ-ONLY), POST(CREATE), PATCH(UPDATE), DELETE(DESTROY)
// CRUD -> CREATE, READ, UPDATE, DELETE

// querySelector

// for (let cat of cats) {
//   console.log(cat.name, cat["age"]);
//   const card = document.createElement("div");

//   card.classList.add("cat-card");

//   const image = document.createElement("img");
//   image.src = cat.image;

//   const name = document.createElement("p");
//   name.textContent = cat.name;

//   const age = document.createElement("p");
//   age.textContent = cat.age;

//   const breed = document.createElement("p");
//   breed.textContent = cat.breed;

//   const personality = document.createElement("p");
//   personality.textContent = cat.personality;

//   card.append(image, name, age, breed, personality);

//   let cat_list = document.getElementsByClassName("cat-list");

//   console.log(cat_list);
//   cat_list[0].append(card);
// }

let catRequest = fetch("http://localhost:3000/cats/"); //return a promise
catRequest
  .then((response) => response.json()) //gets the response after the promise has been fulfilled
  .then((data) => {
    //get the actual data from the response
    console.log(data);
    renderCats(data);
  });

function postACat() {
  fetch("http://localhost:3000/cats/", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      name: "Pumpkin",
      breed: "Tabby",
      age: 10,
      personality: "Independent",
      image:
        "https://images.squarespace-cdn.com/content/v1/5c6494bbf4e5310e57b3de34/1623557067947-PN4CQHL8B84UEXR4K9CP/Capture.PNG",
    }),
  });
}


function deleteACat() {
  fetch(`http://localhost:3000/cats/6`, {
    method: "DELETE",
  });
}

function renderCats(cats) {
  cats.forEach((cat) => {
    console.log(cat.name, cat["age"]);

    let adopted = false;
    const card = document.createElement("div");

    card.classList.add("cat-card");

    const image = document.createElement("img");
    image.src = cat.image;

    const name = document.createElement("p");
    name.textContent = cat.name;

    const age = document.createElement("p");
    age.textContent = cat.age;

    const breed = document.createElement("p");
    breed.textContent = cat.breed;

    const personality = document.createElement("p");
    personality.textContent = cat.personality;

    const button = document.createElement("button");
    button.textContent = "Adopt";

    button.addEventListener("click", () => {
      console.log("Button is clicked!");
      adopted = !adopted;

      if (adopted) {
        button.textContent = "Adopted";
        card.style.backgroundColor = "grey";
      } else {
        button.textContent = "Adopt";
        card.style.backgroundColor = "white";
      }
    });

    card.append(image, name, age, breed, personality, button);

    let cat_list = document.getElementsByClassName("cat-list");

    console.log(cat_list);
    cat_list[0].append(card);
  });
}

console.log("End of the execution!");

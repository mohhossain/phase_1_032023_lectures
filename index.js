const cats = [
  {
    name: "Fluffy",
    age: 2,
    breed: "Persian",
    personality: "Affectionate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/220px-White_Persian_Cat.jpg",
  },
  {
    name: "Socks",
    age: 4,
    breed: "Siamese",
    personality: "Playful",
    image:
      "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Siamese%201.jpg?h=c17eaee4&itok=BRsemy6v",
  },
  {
    name: "Whiskers",
    age: 1,
    breed: "Maine Coon",
    personality: "Curious",
    image:
      "https://westparkanimalhospital.com/wp-content/uploads/2019/05/WestPark_iStock-600994082-1024x706-1.jpg",
  },
  {
    name: "Mittens",
    age: 5,
    breed: "Tabby",
    personality: "Independent",
    image:
      "https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg",
  },
];

// we have an array of objects
// we iterate over the array
// we iterate over the objects
// we create a new element for each object
// we append it to the div with the class cat-list

console.log(cats);

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

let addToy = false;

const imageObj = {
  method: "GET",
  headers: {
      "Content-Type" : "application/json",
      Accept: "application/json",
  },
  body: JSON.stringify(),
};




document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function showToy(toy) {
  const grabElement = document.getElementById("toy-collection")
  const newClass = document.createElement("div");
  newClass.setAttribute("class", "card");
  grabElement.append(newClass);
};

function fetchToys() {
  fetch("http://localhost:3000/toys")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    data.forEach(toy => showToy(toy));

    console.log(data)
    document.querySelector("#toy-collection").textContent = object
  })
};

function fetchImage() {
  fetch("http://localhost:3000/toys")
  .then(function (response) {
    return response.json
  })
  .then(function (image) {
    image.forEach(toyImage => showImage(toyImage))
    document.querySelector("body").textContent = object.id
  })
}

function showImage(toy) {
  const img = document.createElement("img")
  Image.src = toy;
  const toyImageContainer = document.getElementById("toy-collection")
  toyImageContainer.append(img)
}





showToy();
fetchToys();
showImage()

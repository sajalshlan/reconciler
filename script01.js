function createDomElements(data) {
  let parentElement = document.getElementById("main");

  //clear all the exisitng children of the parent element
  parentElement.innerHTML = "";

  let added = 0;

  //for every todo item in our data array
  data.forEach((item) => {
    added++;

    //first a child element
    let childElement = document.createElement("div");

    let grandChild1 = document.createElement("span");
    grandChild1.innerHTML = item.title;
    let grandChild2 = document.createElement("span");
    grandChild2.innerHTML = item.description;
    let grandChild3 = document.createElement("button");
    grandChild3.innerHTML = "Delete";
    grandChild3.setAttribute("onclick", "deleteTodo(" + item.id + ")");

    childElement.appendChild(grandChild1);
    childElement.appendChild(grandChild2);
    childElement.appendChild(grandChild3);
    parentElement.appendChild(childElement);
  });
  console.log(added);
}

window.setInterval(() => {
  let todos = [];

  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    todos.push({
      title: "go to gym",
      description: "do arms today",
      id: i + 1,
    });
  }

  createDomElements(todos);
}, 5000);

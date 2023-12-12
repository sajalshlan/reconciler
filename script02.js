function createDomElements(data) {
  let parentElement = document.getElementById("main");

  //clear all the exisitng children of the parent element
  //   parentElement.innerHTML = "";

  //creating a children array
  let currentChildren = Array.from(parentElement.children);

  let added = 0,
    updated = 0,
    deleted = 0;

  //for every todo item in our data array
  data.forEach((item) => {
    let existingChild = currentChildren.find((child) => {
      return child.dataset.id === String(item.id);
    });

    if (existingChild) {
      updated++;
      //means this todo item exists, so have to update it
      existingChild.children[0].innerHTML = item.title;
      existingChild.children[1].innerHTML = item.description;

      //now remove this todo item from the current childrenElement array so that on next iteration we dont again check it
      currentChildren = currentChildren.filter((child) => {
        return child !== existingChild;
      });
    } else {
      //does not already exist, so gotta add the new todo item
      added++;
      let childElement = document.createElement("div");
      childElement.dataset.id = item.id;
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
    }

    //now if there is any children left in the currentChildren, we gotta delete it
    currentChildren.forEach((child) => {
      deleted++;
      parentElement.remove(child);
    });
  });
  console.log(added);
  console.log(deleted);
  console.log(updated);
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

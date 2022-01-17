const enableModeChange = () => {
  const body = document.getElementsByTagName("body");
  const modeIcon = document.getElementById("modeIcon");

  modeIcon.addEventListener("click", () => {
    let classMode = body[0].classList;
    if (classMode.contains("light-mode")) {
      modeIcon.setAttribute("src", "./images/icon-sun.svg");
      body[0].classList.remove("light-mode");
      body[0].classList.add("dark-mode");
    } else if (classMode.contains("dark-mode")) {
      modeIcon.setAttribute("src", "./images/icon-moon.svg");
      body[0].classList.remove("dark-mode");
      body[0].classList.add("light-mode");
    }
  });
};
const storeInLocalStorage = (itemName, value) => {
  localStorage.setItem(itemName, JSON.stringify(value));
};

const getLocalStorageitem = (itemName) => {
  let items = JSON.parse(localStorage.getItem(itemName));
  return items;
};

const fetchTodoItems = () => {
  // fetch items from local storage
  let todoItems = getLocalStorageitem("todoItems");
  // display fetched items for user
  if (todoItems && todoItems.length === 0) {
    let todos = document.getElementById("todoItems");
    todos.innerHTML = "";
    let itemsCount = document.getElementById("itemsCount");
    itemsCount.innerHTML = "0 items";
  }
  if (todoItems && todoItems.length > 0) {
    // empty the parent of the todo items
    let todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    // create new elements to display the items
    todoItems.forEach((item, i) => {
      let inputWrapper = document.createElement("div");
      inputWrapper.classList.add("input-wrapper");

      let newCheckbox = document.createElement("input");
      newCheckbox.addEventListener("change", updateLocalStorageItem);
      newCheckbox.type = "checkbox";
      newCheckbox.setAttribute("id", i);
      if (item.status === "completed") {
        newCheckbox.setAttribute("checked", "");
      }
      newCheckbox.setAttribute("value", item.value);

      let newLabel = document.createElement("label");
      newLabel.innerHTML = item.value;
      newLabel.setAttribute("for", i);
      newLabel.classList.add("checkbox-design");

      let newOuterCheckbox = document.createElement("div");
      newOuterCheckbox.classList.add("checkbox-new");

      let deleteIcon = document.createElement("img");
      deleteIcon.setAttribute("alt", "delete icon");
      deleteIcon.setAttribute("src", "./images/icon-cross.svg");
      deleteIcon.classList.add("delete-btn");
      deleteIcon.setAttribute("itemId", i);
      deleteIcon.addEventListener("click", removeItem);

      newLabel.appendChild(newOuterCheckbox);
      newLabel.appendChild(deleteIcon);

      inputWrapper.appendChild(newCheckbox);
      inputWrapper.appendChild(newLabel);

      todos.appendChild(inputWrapper);
    });

    let itemsCount = document.getElementById("itemsCount");
    itemsCount.innerHTML = `${todoItems.length} ${
      todoItems.length === 1 ? "item" : "items"
    }`;
  }
};

const addTodoItem = document.getElementById("addTodoItem");

addTodoItem.addEventListener("submit", (e) => {
  e.preventDefault();
  let newItem = e.target.addNewItem.value;
  if (newItem) {
    let storedItems = getLocalStorageitem("todoItems");
    if (storedItems && Array.isArray(storedItems)) {
      storedItems.push({ value: newItem, status: "active" });
    } else {
      storedItems = [{ value: newItem, status: "active" }];
    }

    storeInLocalStorage("todoItems", storedItems);
    fetchTodoItems();
    addTodoItem.reset();
  }
});

function updateLocalStorageItem(e) {
  let todoItems = getLocalStorageitem("todoItems");
  if (todoItems && todoItems.length) {
    if (e.target.checked) {
      todoItems[e.target.id].status = "completed";
    } else {
      todoItems[e.target.id].status = "active";
    }
    storeInLocalStorage("todoItems", todoItems);
    fetchTodoItems();
  }
}

function removeItem(e) {
  let todoItems = getLocalStorageitem("todoItems");
  let itemId = parseInt(e.target.getAttribute("itemId"));
  updatedItems = todoItems.filter((item, i) => {
    if (i !== itemId) {
      return item;
    }
  });
  storeInLocalStorage("todoItems", updatedItems);
  fetchTodoItems();
}

const filterTodoItems = (filter) => {
  const todoBtns = document.getElementById("todoBtns");
  todoBtns.childNodes.forEach((child) => {
    if (child && child.classList && child.classList.contains("active")) {
      child.classList.remove("active");
    }
    if (child && child.innerHTML === filter) {
      child.classList.add("active");
    }
  });
  if (filter === "All") {
    fetchTodoItems();
    return;
  }
  let todoItems = getLocalStorageitem("todoItems");

  if (todoItems && Array.isArray(todoItems) && todoItems.length === 0) {
    let todos = document.getElementById("todoItems");
    todos.innerHTML = "";
    let itemsCount = document.getElementById("itemsCount");
    itemsCount.innerHTML = "0 items";
  }
  if (todoItems && Array.isArray(todoItems) && todoItems.length > 0) {
    let todos = document.getElementById("todoItems");
    todos.innerHTML = "";
    if (filter === "Active") {
      let count = 0;
      todoItems.forEach((item, i) => {
        if (item.status === "active") {
          count++;
          let inputWrapper = document.createElement("div");
          inputWrapper.classList.add("input-wrapper");

          let newCheckbox = document.createElement("input");
          newCheckbox.type = "checkbox";
          newCheckbox.setAttribute("id", i);
          if (item.status === "completed") {
            newCheckbox.setAttribute("checked", "");
          }
          newCheckbox.setAttribute("value", item.value);
          newCheckbox.addEventListener("change", updateLocalStorageItem);

          let newLabel = document.createElement("label");
          newLabel.innerHTML = item.value;
          newLabel.setAttribute("for", i);
          newLabel.classList.add("checkbox-design");

          let newOuterCheckbox = document.createElement("div");
          newOuterCheckbox.classList.add("checkbox-new");

          let deleteIcon = document.createElement("img");
          deleteIcon.setAttribute("alt", "delete icon");
          deleteIcon.setAttribute("src", "./images/icon-cross.svg");
          deleteIcon.classList.add("delete-btn");
          deleteIcon.setAttribute("itemId", i);
          deleteIcon.addEventListener("click", removeItem);

          newLabel.appendChild(newOuterCheckbox);
          newLabel.appendChild(deleteIcon);

          inputWrapper.appendChild(newCheckbox);
          inputWrapper.appendChild(newLabel);
          todos.appendChild(inputWrapper);
        }
      });

      let itemsCount = document.getElementById("itemsCount");
      itemsCount.innerHTML = `${count} ${count === 1 ? "item" : "items"}`;
      return;
    }

    if (filter === "Completed") {
      let count = 0;
      todoItems.forEach((item, i) => {
        if (item.status === "completed") {
          count++;
          let inputWrapper = document.createElement("div");
          inputWrapper.classList.add("input-wrapper");

          let newCheckbox = document.createElement("input");
          newCheckbox.addEventListener("change", updateLocalStorageItem);
          newCheckbox.type = "checkbox";
          newCheckbox.setAttribute("id", i);
          if (item.status === "completed") {
            newCheckbox.setAttribute("checked", "");
          }
          newCheckbox.setAttribute("value", item.value);

          let newLabel = document.createElement("label");
          newLabel.innerHTML = item.value;
          newLabel.setAttribute("for", i);
          newLabel.classList.add("checkbox-design");

          let newOuterCheckbox = document.createElement("div");
          newOuterCheckbox.classList.add("checkbox-new");
          newLabel.appendChild(newOuterCheckbox);

          inputWrapper.appendChild(newCheckbox);
          inputWrapper.appendChild(newLabel);
          todos.appendChild(inputWrapper);
        }
      });

      let itemsCount = document.getElementById("itemsCount");
      itemsCount.innerHTML = `${count} ${count === 1 ? "item" : "items"}`;
      return;
    }
  }
};

const clearCompleted = () => {
  let todoItems = getLocalStorageitem("todoItems");

  let updatedTodoItems = todoItems.filter((item) => {
    if (item.status !== "completed") {
      return item;
    }
  });

  storeInLocalStorage("todoItems", updatedTodoItems);
  fetchTodoItems();
};

enableModeChange();
fetchTodoItems();

/*Storage Controller*/
//  Data structure
const data = {
  items: [],
  currentItem: null,
  totalCalories: 0
};

class App {
  constructor() {
    const uiCtrl = new UICtrl();
    const itemCtrl = new ItemCtrl();
    const UISelectors = uiCtrl.getSelectors();
    // Load event Listeners
    const loadEventListeners = function() {
      // Add item event
      document
        .querySelector(UISelectors.addBtn)
        .addEventListener("click", itemAddSubmit);

        // Disable submit on Enter
        document.addEventListener("keypress", function(e) {
          //if enter was hit
          if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            return false;
          }
        });

      // Edit icon click event
      document
        .querySelector(UISelectors.itemList)
        .addEventListener("click", itemEditClick);

      // Update item event
      document
        .querySelector(UISelectors.updateBtn)
        .addEventListener("click", itemUpdateSubmit);

      //Delete button event
      document
        .querySelector(UISelectors.deleteBtn)
        .addEventListener("click", itemDeleteSubmit);

      //Back button event
      document
        .querySelector(UISelectors.backBtn)
        .addEventListener("click", uiCtrl.clearEditState);
    };

    // Add item submit
    const itemAddSubmit = function(e) {
      // Get form input from UI controller
      const input = uiCtrl.getItemInput();

      // Check for name and calorie input
      if (input.name !== "" && input.calories !== "") {
        // Add item
        const newItem = itemCtrl.addItem(input.name, input.calories);

        // Add item to list
        uiCtrl.addListItem(newItem);

        // Get total calories
        const totalCalories = itemCtrl.getTotalCalories();

        // Add total calories to UI
        uiCtrl.showTotalCalories(totalCalories);
        // Clear fields
        uiCtrl.clearInput();
      }

      e.preventDefault();
    };

    // Click edit item
    const itemEditClick = function(e) {
      if (e.target.classList.contains("edit-item")) {
        // Get list item id (item-0, item-1, etc)
        const listId = e.target.parentNode.parentNode.id;

        // Break into an array
        // Split(seperator) - splits up elements into an array using a seperator
        const listIdArr = listId.split("-");

        // Get the actual id
        const id = parseInt(listIdArr[1]);

        // Get item
        const itemToEdit = itemCtrl.getItemById(id);

        // Set current item
        itemCtrl.setCurrentItem(itemToEdit);

        // Add item to dom
        uiCtrl.addItemToForm();
      }
      e.preventDefault();
    };

    // Update item submit
    const itemUpdateSubmit = function(e) {
      // Get item input
      const input = uiCtrl.getItemInput();
      console.log(input)
      
      // Update item
      const updatedItem = itemCtrl.updateItem(input.name, input.calories);

      //Update UI
      uiCtrl.updateListItem(updatedItem);

      // Get total calories
      const totalCalories = itemCtrl.getTotalCalories();

      // Add total calories to UI
      uiCtrl.showTotalCalories(totalCalories);

      e.preventDefault();
    };

    // Delete button event
    const itemDeleteSubmit = function(e){
      console.log("123");

      e.preventDefault();
    }


    /*Public Methods*/
    return {
      init() {
        // Fetch Items from data structure
        const uiCtrl = new UICtrl();
        const itemCtrl = new ItemCtrl();
        const items = itemCtrl.getItems();

        // Clear edit state / set initial state
        uiCtrl.clearEditState();

        // Check if any items in item list
        if (items.length === 0) {
          uiCtrl.hideList();
        } else {
          // Populate list with items
          uiCtrl.populateItemList(items);
        }
        // Get total calories
        const totalCalories = itemCtrl.getTotalCalories();

        // Add total calories to UI
        uiCtrl.showTotalCalories(totalCalories);

        /*Load Event Listeners*/
        loadEventListeners();
      }
    };
  }
}

const app = new App();
app.init();

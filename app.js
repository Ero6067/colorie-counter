/*Storage Controller*/

//  Data structure
const data = {
  items: [
    // {id: 0, name: 'Steak Dinner', calories: 1200},
    // {id: 1, name: 'Cookie', calories: 400},
    // {id: 2, name: 'Eggs', calories: 300}
  ],
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
      // Edit icon click event
      document
        .querySelector(UISelectors.itemList)
        .addEventListener("click", itemUpdateSubmit);
    };

    // Add Item Submit
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

    // Update item submit
    const itemUpdateSubmit = function(e) {
      if(e.target.classList.contains('edit-item')) {
        // Get list item id (item-0, item-1, etc)
        const listId = e.target.parentNode.parentNode.id;
        
        // Break into an array
        // Split(seperator) - splits up elements into an array using a seperator
        const listIdArr = listId.split('-');

        // Get the actual id
        const id = parseInt(listIdArr[1]);

        // Get item
        const itemToEdit = itemCtrl.getItemById(id);
        
        // Set current item
        itemCtrl.setCurrentItem(itemToEdit);

        // Add item to dorm
        uiCtrl.addItemToForm();
      }
      e.preventDefault();
    };

    /*Public Methods*/
    return {
      init() {
        // Fetch Items from data structure
        const uiCtrl = new UICtrl();
        const itemCtrl = new ItemCtrl();
        const items = itemCtrl.getItems();

        // Clear edit state / set initial state
        uiCtrl.setInitialState();

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

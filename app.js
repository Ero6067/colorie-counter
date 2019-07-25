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
    // Load event Listeners
    const loadEventListeners = () => {
      document
        .querySelector(".add-btn")
        .addEventListener("click", itemAddSubmit);
    };

    // Add Item Submit
    const itemAddSubmit = function(e) {
      const uiCtrl = new UICtrl();
      // Get form input from UI controller
      const input = uiCtrl.getItemInput();

      /*Check for name and calorie input*/
      if (input.name !== "" && input.calories !== "") {
        const itemCtrl = new ItemCtrl();
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

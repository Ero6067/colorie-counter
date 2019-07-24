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
    /*Load event Listeners*/
    const loadEventListeners = () => {
      document
        .querySelector(".add-btn")
        .addEventListener("click", itemAddSubmit);
    };

    /*Add Item Submit*/
    const itemAddSubmit = function(e) {
      const uictrl = new UICtrl();
      const input = uictrl.getItemInput();

      /*Check for name and calorie input*/
      if (input.name !== "" && input.calories !== "") {
        const itemctrl = new ItemCtrl();

        const newItem = itemctrl.addItem(input.name, input.calories);

        /*add item to list*/
        //const uictrl = new UICtrl();
        uictrl.addListItem(newItem);

        uictrl.clearInput();
      }

      e.preventDefault();
    };

    /*Public Methods*/
    return {
      init() {
        /*Fetch Items from data structure*/
        const uictrl = new UICtrl();
        const itemctrl = new ItemCtrl();

        const items = itemctrl.getItems();

        if (items.length === 0) {
          uictrl.hideList();
        } else {
          /*Popultae list with items*/

          uictrl.populateItemList(items);
        }

        /*Load Event Listeners*/
        loadEventListeners();
      }
    };
  }
}

const app = new App();
app.init();

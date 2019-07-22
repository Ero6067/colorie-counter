// Storage Controller

// Item Controller
const ItemCtrl = (function()  {
  // Item Controller
  const Item = function(id, name, calories){
    this.id - id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Food1', calories: 1200},
      {id: 1, name: 'Food2', calories: 400},
      {id: 2, name: 'Food3', calories: 200}
    ],
    curerntITem: null,
    totalCalories: 0
  }

  // Public Methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  }
})();

// UI Controller
const UICtrl = (function()  {
  const UISelectors = {
    // Put the id in a variable so that if we change the id name won't have to
    // change it all over the place, just in this UISelectors var
    itemList: '#item-list',
    addBtn: '.add-btn'
  }
  // Public Methods
  return {
    populateItemList: function(items) {
      let html ='';

      items.forEach(function(item) {
        html += ` <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function(){
      return UISelectors;
    }
  }

})();

//App Controller
const App = (function(ItemCtrl, UICtrl)  {
  // Load event listeners
  const loadEventListerns = function(){
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e) {
    console.log('Add ITEM');
    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      // Fetch items from data structure
      const items = ItemCtrl.getItems();
      // Populate list with items
      UICtrl.populateItemList(items);

      // Load event  listeners
      loadEventListerns();
    }
  }
  
})(ItemCtrl, UICtrl);

// Initilaizing App
App.init();
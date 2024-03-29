/*UI Controller*/
class UICtrl {
  constructor() {
    const itemCtrl = new ItemCtrl();
    const UISelectors = {
      itemList: "#item-list",
      listItems: "#item-list li",
      addBtn: ".add-btn",
      updateBtn: ".update-btn",
      deleteBtn: ".delete-btn",
      backBtn: ".back-btn",
      clearBtn: ".clear-btn",
      itemNameInput: "#item-name",
      itemCaloriesInput: "#item-calories",
      totalCalories: ".total-calories"
    };

    function showEditState() {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    }

    //Public Methods
    return {
      populateItemList(items) {
        let html = "";

        items.forEach(function(item) {
          html += `
            <li class="collection-item" id="item-${item.id}">
              <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
              </a>
            </li>
          `;
        });

        /*Insert List Items*/
        document.getElementById(UISelectors.itemList).innerHTML = html;
      },

      getItemInput: function() {
        return {
          name: document.querySelector(UISelectors.itemNameInput).value,
          calories: document.querySelector(UISelectors.itemCaloriesInput).value
        };
      },

      addListItem: function(item) {
        //Show the list
        document.querySelector(UISelectors.itemList).style.display = "block";
        /*Create li element*/
        const li = document.createElement("li");
        /*Add Class*/
        li.className = "collection-item";
        /*Add ID*/
        li.id = `item-${item.id}`;
        /*Add HTML*/
        li.innerHTML = `<strong>${item.name}: </strong> <em>${
          item.calories
        } Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        /*Insert Item*/
        document
          .querySelector(UISelectors.itemList)
          .insertAdjacentElement("beforeend", li);
      },

      updateListItem: function(item) {
        // creates a node list from the query
        let listItems = document.querySelectorAll(UISelectors.listItems);

        // Turn Node list into array
        listItems = Array.from(listItems);

        listItems.forEach(function(listItem) {
          const itemID = listItem.getAttribute("id");

          if (itemID === `item-${item.id}`) {
            document.querySelector(`#${itemID}`).innerHTML = `<strong>${
              item.name
            }: 
              </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
              </a>`;
          }
        });
      },

      deleteListItem: function(id) {
        const itemID = `#item-${id}`;
        const item = document.querySelector(itemID);
        item.remove();
      },

      clearInput: function() {
        document.querySelector(UISelectors.itemNameInput).value = "";
        document.querySelector(UISelectors.itemCaloriesInput).value = "";
      },

      addItemToForm: function() {
        document.querySelector(
          UISelectors.itemNameInput
        ).value = itemCtrl.getCurrentItem().name;
        document.querySelector(
          UISelectors.itemCaloriesInput
        ).value = itemCtrl.getCurrentItem().calories;
        showEditState();
      },

      removeItems: function() {
        let listItems = document.querySelectorAll(UISelectors.listItems);

        // Turn Node list into array
        listItems = Array.from(listItems);

        listItems.forEach(function(item) {
          item.remove();
        });
      },

      hideList: function() {
        document.querySelector(UISelectors.itemList).style.display = "none";
      },

      showTotalCalories(totalCalories) {
        document.querySelector(
          UISelectors.totalCalories
        ).textContent = totalCalories;
      },

      clearEditState: function() {
        document.querySelector(UISelectors.itemNameInput).value = "";
        document.querySelector(UISelectors.itemCaloriesInput).value = "";
        document.querySelector(UISelectors.updateBtn).style.display = "none";
        document.querySelector(UISelectors.deleteBtn).style.display = "none";
        document.querySelector(UISelectors.backBtn).style.display = "none";
        document.querySelector(UISelectors.addBtn).style.display = "inline";
      },

      getSelectors: function() {
        return UISelectors;
      }
    };
  }
}

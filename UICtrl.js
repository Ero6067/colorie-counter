/*UI Controller*/

class UICtrl {
  constructor() {
    const UISelectors = {
      itemList: '#item-list',
      addBtn: '.add-btn',
      updateBtn: '.update-btn',
      deleteBtn: '.delete-btn',
      backBtn: '.back-btn',
      itemNameInput: '#item-name',
      itemCaloriesInput: '#item-calories',
      totalCalories: '.total-calories'

    };

    //Public Methods
    return {
      populateItemList(items) {
        let html = "";

        items.forEach(function(item) {
          html += `
            <li class="collection-item" id="${item.id}">
              <strong>${item.name} </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
              </a>
            </li>
          `;
        });

        /*Insert List Items*/
        document.getElementById(UISelectors.itemList).innerHTML = html;
      },
      
      getItemInput(){
        return {
          name:document.querySelector(UISelectors.itemNameInput).value,
          calories:document.querySelector(UISelectors.itemCaloriesInput).value
        }
      },
     
      addListItem (item) {
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

      clearInput() {
        document.querySelector(UISelectors.itemNameInput).value = "";
        document.querySelector(UISelectors.itemCaloriesInput).value = "";
      },
      
      hideList() {
        document.querySelector(UISelectors.itemList).style.display = 'none';
      },
      showTotalCalories(totalCalories) {
        document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
      },
      setInitialState() {
        //clearInput();
        document.querySelector(UISelectors.updateBtn).style.display = 'none';
        document.querySelector(UISelectors.deleteBtn).style.display = 'none';
        document.querySelector(UISelectors.backBtn).style.display = 'none';
        document.querySelector(UISelectors.addBtn).style.display = 'inline';
      },
      
      getSelectors: () => {
        return UISelectors;
      }
    };
  }
}

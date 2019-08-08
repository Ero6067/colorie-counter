class ItemCtrl {
  constructor() {
    //Data Structure/State
    const Item = function(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    };

    //Public Methods
    return {
      getItems(item) {
        return data.items;
      },

      //Add items
      addItem(name, calories) {
        let ID;
        /*Create ID*/
        if (data.items.length > 0) {
          ID = data.items[data.items.length - 1].id + 1;
        } else {
          ID = 0;
        }

        /*Calories to Numbers*/
        calories = parseInt(calories);

        /*Create new item*/
        const newItem = new Item(ID, name, calories);

        /*Add Items to Array*/
        data.items.push(newItem);

        //console.log(data.items);
        return newItem;
      },

      getItemById(id) {
        let found= null;
        // Loop through items
        data.items.forEach(function(item) {
          if(item.id === id) {
            found = item;
          }
        });
        return found;
      },

      updateItem: function(name, calories){
        // Calories to number
        calories = parseInt(calories);

        let found = null;

        data.items.forEach(function(item){
          if(item.id === data.currentItem.id) {
            item.name = name;
            item.calories = calories;
            found = item;
          }
        });
        return found;
      },

      setCurrentItem: function(item) {
        data.currentItem = item;
      },

      getCurrentItem: function() {
        return data.currentItem;
      },

      getTotalCalories() {
        let total = 0;

        // Loop through items and add calories
        data.items.forEach(function(item){
          total += item.calories;
        });

        // Set total calories in data structures
        data.totalCalories = total;

        // Return total
        return data.totalCalories;
      },

      logData: function() {
        return data;
      }
    };
  }
}

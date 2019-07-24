class ItemCtrl {
  constructor() {
    //Data Structure/State
    const Item = function(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    };

    //Public Meth0ds
    return {
      getItems(item) {
        return data.items;
      },

      /*Add items*/
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

        console.log(newItem);

        /*Add Items to Array*/
        data.items.push(newItem);

        console.log(data.items);
        return newItem;
      },

      logData() {
        return data;
      }
    };
  }
}

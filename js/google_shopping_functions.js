
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */
function getItems(objectData) {
    return objectData.items;
}

function getItemsByBrands(items, brand){
    var selectedItems = [];
    for (var i=0; i<items.length; i++){

        if (items[i].product.brand === brand){
            selectedItems.push(items[i]);
        }
    }
    return selectedItems;
}

function getItemsByAuthor(items, author){
    var selectedItems = [];
    for (var i=0; i<items.length; i++){

        if (items[i].product.author.name === author){
            selectedItems.push(items[i].product.title);
        }
    }
    return selectedItems;
}

function getAvailableProducts(items){
    var selectedItems = [];
    for (var i=0; i<items.length; i++){
        console.log(items[i].product.inventories);
        if (items[i].product.inventories[0].availability === "inStock"){
            selectedItems.push(items[i].product.title);
        }
    }
    return selectedItems;
}


// output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));


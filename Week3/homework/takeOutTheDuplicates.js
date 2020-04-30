"use strict"
const letters = ['a', 'b', 'b', 'c', 'd', 'a', 'e', 'f', 'f', 'c', 'b'];

function removeDuplicates(array) {
    // firstly we sort the array after that we compare current item and previous item. If the item is the same previous item, we are not taking this item.
    return array.sort().filter(function(item, index) {
        return item != array[index - 1];
    })
}

console.log(removeDuplicates(letters));
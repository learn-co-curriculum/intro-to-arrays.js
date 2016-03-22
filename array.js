'use strict';
function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToArray(array) {
  array.push("A Christmas Story")
  return array
}

function accessElementFromArray(state_array) {
  return state_array[2]
}

function replaceElementInArray(name_array) {
  return name_array[1] = "Carter"
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken")
  return dishes
}

function iterateArray(numbers) {
  var newNumber = []
  numbers.forEach(function(number) {
    newNumber.push(number + 5)
    });
  return newNumber
}
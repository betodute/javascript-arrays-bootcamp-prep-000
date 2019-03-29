//OMG Arrays Mode

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars,candyString) {
  return [candyString,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, candyString) {
  chocolateBars.unshift(candyString)
  return chocolateBars;
}

function accessElementInArray (array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift() ;
}

function removeElementFromBeginningOfArray (chocolateBars){
  return chocolateBars.slice(1);
}

function destrucivelyRemoveElementFromEndOfArray
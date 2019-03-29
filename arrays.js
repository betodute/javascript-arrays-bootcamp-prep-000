//OMG Arrays Mode

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars,candyString) {
  return [candyString,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, candyString) {
  chocolateBars.unshift(candyString)
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,candyString) {
  return [...chocolateBars, candyString];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  return chocolateBars.push(candyString);
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

function destrucivelyRemoveElementFromEndOfArray (chocolateBars) {
  return chocolateBars.pop();
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0,chocolateBars.length-1);
}

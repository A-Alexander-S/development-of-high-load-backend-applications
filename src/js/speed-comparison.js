/**
 * Comparing the speed of adding, removing and searching
 * for an element (indexOf and has) in Array and Set.
*/

let button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  arraySpeedTest(array);
  setSpeedTest(setSet);
})

let array = [];

let arraySpeedTest = (array) => {

  /**
   * calculation the time of adding elements to an array
   * using the PUSH method
  */
  let startTimePush = Date.now();
  for (let i = 1; i <= 100000; i++) {
    array.push(i);
  }
  let endTimePush = (Date.now() - startTimePush) / 1000;
  document.getElementById("array-push").innerHTML = endTimePush;

  /**
   * calculating the search time for an array element
   * using the INDEXOF indexOf method
   * 
  */
  let startTimeIndexOf = Date.now();
  array.indexOf(100000, 0);
  let endTimeIndexOf = (Date.now() - startTimeIndexOf) / 1000;
  document.getElementById("array-indexof").innerHTML = endTimeIndexOf;

  /**
   * calculating the time of removal from an array of elements
   * using the POP method
  */
  let startTimePop = Date.now();
  for (let i = array.length; i >= 1; i--) {
    array.pop();
  }
  let endTimePop = (Date.now() - startTimePop) / 1000;
  document.getElementById("array-pop").innerHTML = endTimePop;

  // console.log(array)
}

let setSet = new Set();

let setSpeedTest = (setSet) => {

  /**
   * calculating the time of adding from an Set of elements
   * using the ADD method
  */
  let startTimeAdd = Date.now();
  for (let i = 1; i <= 100000; i++) {
    setSet.add(i);
  }
  let endTimeAdd = (Date.now() - startTimeAdd) / 1000;
  document.getElementById("set-add").innerHTML = endTimeAdd;

  /**
   * calculating the time of search from an Set of elements
   * using the HAS method
  */
  let startTimeHas = Date.now();

  setSet.has(100000);

  let endTimeHas = (Date.now() - startTimeHas) / 1000;
  document.getElementById("set-has").innerHTML = endTimeHas;

  /**
   * calculating the time of search from an Set of elements
   * using the delete method
  */
  let startTimeDelete = Date.now();
  for (let i = setSet.size; i >= 1; i--) {
    setSet.delete(100000)
  }
  let endTimeDelete = (Date.now() - startTimeDelete) / 1000;
  document.getElementById("set-delete").innerHTML = endTimeDelete;
}


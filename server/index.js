// console.log(process.argv);

/**
 * Comparing the speed of adding, removing and searching
 * for an element (indexOf and has) in Array and Set.
*/


let array = [];

let arraySpeedTest = (array) => {
  console.log("Array");
  /**
   * calculation the time of adding elements to an array
   * using the PUSH method
  */
  let startTimePush = Date.now();
  for (let i = 1; i <= 100000; i++) {
    array.push(i);
  }
  let endTimePush = (Date.now() - startTimePush) / 1000;
  console.log(`Метод push: ${endTimePush} c`);

  /**
   * calculating the search time for an array element
   * using the INDEXOF indexOf method
   * 
  */
  let startTimeIndexOf = Date.now();
  array.indexOf(100000, 0);
  let endTimeIndexOf = (Date.now() - startTimeIndexOf) / 1000;
  console.log(`Метод indexOf: ${endTimeIndexOf} c`);

  /**
   * calculating the time of removal from an array of elements
   * using the POP method
  */
  let startTimePop = Date.now();
  for (let i = array.length; i >= 1; i--) {
    array.pop();
  }
  let endTimePop = (Date.now() - startTimePop) / 1000;
  console.log(`Метод pop: ${endTimePop} c`);
}

let setSet = new Set();

let setSpeedTest = (setSet) => {
  console.log("Set");
  /**
   * calculating the time of adding from an Set of elements
   * using the ADD method
  */
  let startTimeAdd = Date.now();
  for (let i = 1; i <= 100000; i++) {
    setSet.add(i);
  }
  let endTimeAdd = (Date.now() - startTimeAdd) / 1000;
  console.log(`Метод add: ${endTimeAdd} c`);

  /**
   * calculating the time of search from an Set of elements
   * using the HAS method
  */
  let startTimeHas = Date.now();

  setSet.has(100000);

  let endTimeHas = (Date.now() - startTimeHas) / 1000;
  console.log(`Метод has: ${endTimeHas} c`);

  /**
   * calculating the time of search from an Set of elements
   * using the delete method
  */
  let startTimeDelete = Date.now();
  for (let i = setSet.size; i >= 1; i--) {
    setSet.delete(100000)
  }
  let endTimeDelete = (Date.now() - startTimeDelete) / 1000;
  console.log(`Метод delete: ${endTimeDelete} c`);
}

arraySpeedTest(array);
setSpeedTest(setSet);
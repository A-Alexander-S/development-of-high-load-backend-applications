/**
 * Comparing the speed of adding, removing and searching
 * for an element (indexOf and has) in Array and Set.
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySpeedTest(array) {
  /////////////
  let startTime = Date.now();
  console.log(startTime / 1000);
  /////////////
  for (let i = 0; i <= 10000; i++) {
    array.push(1);
  }

  for (item of array) {
    console.log(item);
  }
  /////////////
  let endTime = Date.now() - startTime;
  console.log(endTime);
  /////////////
}
arraySpeedTest(array);
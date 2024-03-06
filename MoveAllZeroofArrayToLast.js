/*let n = [3, 4, 5, 0, 0, 6, 0, 7]

function moveAllZeroToLast(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            for (let j = i+1; j < array.length; j++) {
                if (array[j] != 0) {
                    const temp = array[j]
                    array[j] = array[i]
                    array[i] = temp
                }
            }
        }
    }
}

moveAllZeroToLast(n)

console.log(n);*/

function moveZerosToEnd(arr) {
    let count = 0;
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is non-zero, swap it with the element at count
      if (arr[i] !== 0) {
        const temp = arr[i];
        arr[i] = arr[count];
        arr[count] = temp;
  
        // Move the count to the next position
        count++;
      }
    }
  }
  
  const arrayWithZeros = [1, 0, 5, 0, 3, 0, 7, 2];
  moveZerosToEnd(arrayWithZeros);
  
  console.log("Array with Zeros Moved to End:", arrayWithZeros);
  
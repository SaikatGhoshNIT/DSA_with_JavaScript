function reverseArray(n) {
    let startIndex = 0;
    let endIndex = n.length - 1

    while (startIndex < endIndex) {
        // Swap elements at start and end indices
        const temp = n[startIndex];
        n[startIndex] = n[endIndex];
        n[endIndex] = temp;
        startIndex++
        endIndex--
    }

}

const unsortedArray = [5, 2, 8, 1, 7];
reverseArray(unsortedArray);

console.log("Reversed Unsorted Array:", unsortedArray);
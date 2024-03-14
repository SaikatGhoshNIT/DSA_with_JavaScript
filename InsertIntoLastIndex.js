const arr = [1,2,3,4,5]
let sizeOfArray = 6
let element = 60


function insertAtEnd(arr,sizeOfArray,element)
{
    // code here
    arr[sizeOfArray-1] = element
}

insertAtEnd(arr,sizeOfArray,element)

console.log(arr);
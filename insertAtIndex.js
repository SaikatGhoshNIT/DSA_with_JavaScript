const arr = [1,2,3,4,5]
let sizeOfArray = 6
let index = 2
let element = 60

function insertAtIndex(arr,sizeOfArray,index,element){
    if(index>sizeOfArray) return

    for (let i = sizeOfArray-1; i>=index; i--) {
        arr[i] = arr[i-1]
    }
    arr[index] = element    
}

insertAtIndex(arr,sizeOfArray,index,element)

console.log(arr);
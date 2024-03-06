function leftRotateByOne(arr) {

    const num1 = arr[0]

    for (let i = 1; i < arr.length; i++) {
        //const temp = arr[i]
        arr[i-1] = arr[i]     
    }

    arr[arr.length-1]=num1
    
}

const arr = [1,2,3,4,5]
leftRotateByOne(arr)

console.log(arr);


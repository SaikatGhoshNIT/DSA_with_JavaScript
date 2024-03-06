function findLargest(n) {
    //pre check.
    if (arr.length === 0) {
        return -1; // Return -1 for an empty array
      }

    let biggest = n[0]
    let index

    for(let i = 0; i<n.length;i++){
        if(biggest < n[i]){
            biggest = n[i]
            index = i
        }
    }
    //return n.indexOf(biggest)
    return index
}

console.log(findLargest([10,20,50,60,30]));
function findLargest(n) {
    let biggest = n[0]

    for(let i = 0; i<n.length;i++){
        if(biggest < n[i]){
            biggest = n[i]
        }
    }
    return biggest
}

console.log(findLargest([10,20,50,40,30]));
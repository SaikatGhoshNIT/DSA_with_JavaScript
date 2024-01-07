//! O(n)
/*function calculateTrailingZero(n){
    fac = 1
    count = 0
    for(let i = n; i>0; i--){
        fac = fac*i
    }
    while(fac%10 === 0){
        count++
        fac = fac/10
    }
    return count
}

console.log(calculateTrailingZero(1000));*/

//! O(logn)
function calculateTrailingZero(n){
    
    let count =0;
    for(let i = 5; i <= n; i = i*5){
        count = count+Math.floor(n/i)
    }
    return count
}

console.log(calculateTrailingZero(251));
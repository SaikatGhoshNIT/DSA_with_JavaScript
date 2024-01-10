//! O(min(a,b))
/*function GCD(a,b){
    let maxPossible = Math.min(a,b)
    while(maxPossible>0){
        if(a%maxPossible === 0 && b%maxPossible === 0){
            return maxPossible
        }
        maxPossible--
    } 
}

console.log(GCD(7,0));*/

//! Recursive Solution with both Time and Space complexity of O(log(min(a,b)))
function GCD(a,b) {
    if (b===0)return a;
    return GCD(b, a%b)
}
console.log(GCD(7,13));

//! We can simply ignore this space complexity with Iterative approach

function gcd(a,b){
    while (b !== 0) {
        a = a%b;
        [a,b] = [b,a]
    }
    return a;
}

console.log(gcd(26,13));

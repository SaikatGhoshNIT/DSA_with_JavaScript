
//! O(a*b - max(a,b))
function lcm(a,b){
    let max = Math.max(a,b)

    while(true){
        if (max%a === 0 && max%b === 0){
            return max
        }
        max++
    }
}

console.log(lcm(4,6));

//! O(log(min(a,b))) same as gcm

function LCM(a,b){
    function gcd(a,b){
        while (b !== 0) {
            a = a%b;
            [a,b] = [b,a]
        }
        return a;
    }
    return ((a*b)/gcd(a,b))
}

console.log(LCM(3,7));
function general(n){
    let count = 0

    if(n===0) return 1;

    while(n>0){
        //let num = n % 10
        count++
        n = Math.floor(n/10)
    }
    return count
}

console.log(general(10));;


//!recursion
function recursion(n, count = 0){
    if(n<=0)return count; 
    count++
    n = Math.floor(n/10)
    return recursion(n, count)
}

console.log(recursion(1));


//Best Solution
function countDigits(n)
{
   //Your code here
   if(n<10)
    return 1;

    return 1+countDigits(n/10);
}

console.log(countDigits(100));
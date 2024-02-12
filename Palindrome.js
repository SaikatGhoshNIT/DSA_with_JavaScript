//iterative Solution
/*function palindrome(n = 121){
    let temp = n
    let sum =0;
    while(n>0){
        sum = (sum*10) + (n%10);
        n = Math.floor(n/10)
    }
    if(temp === sum){
        console.log("The give number is a Palindrome");
    }
    else{
        console.log("The given number is not a palindrome");
    }
}
palindrome()*/



//! Recursive Solution
function palindromeRecusive(n,sum){
    
    //base case
    if(n==0){
        return sum
    }
    sum = (sum*10) + (n%10)
    return palindromeRecusive(Math.floor(n/10), sum)
    
}

let temp =12321
if(temp === palindromeRecusive(12321,0)){
    console.log("The give number is a Palindrome");
}
else{
    console.log("The given number is not a palindrome");
}

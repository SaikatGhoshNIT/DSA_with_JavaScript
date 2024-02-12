function sumOfNumbers(num){
    let sum = 0;
    let digit;
    while(num>0){
       digit = num%10
       sum = sum+digit
       num = Math.floor(num/10)
    }
    console.log(sum);
}

sumOfNumbers(123)


//Recursive approach

/*function sumofdigit(num,sum=0){
    if(num===0){
        return sum
    }
    let digit = num%10
    sum = sum+digit
    return sumofdigit(Math.floor(num/10),sum)
}

console.log(sumofdigit(125));*/ //? not a optimal solution


function sumofdigit(num){
    if(num<=9){
        return num
    }
    let digit = num%10
    num = Math.floor(num/10)
    return sumofdigit(num)+digit
}

console.log(sumofdigit(125))
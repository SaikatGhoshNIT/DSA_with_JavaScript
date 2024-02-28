//! 0 1 1 2 3 5 8 13

function general(n){
    let prev1 = 0
    let prev2 = 1

    for(let i=0; i<n; i++){
        if(i>1){
            let num3 = prev1+prev2
            //swap
            prev1 = prev2
            prev2 = num3

            console.log(num3 + " ");
        }
        if(i === 1){
            console.log(prev2+" ");
        }
        if(i === 0){
            console.log(prev1+" ");
        }
    }
}

general(8)


//with recursion

function fibonacci(n) {
    // Base cases
    if (n <= 1) {
      return n;
    }
  
    // Recursive call
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Print the Fibonacci series
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }

fibonacci(8)


//! Print 1 to N


/*function print(n, start){
    //base case
    
    if(n<start){
        return;
    }
    console.log(start);
    return print(n, start+1);
}
print(5,1);*/

function print(n){
    if(n<=0){
        return
    }
    print(n-1)
    console.log(n);
}

print(5)

//! it will take a time  complexity of O(n) also it will take an Auxilary space of O(n), that's why to cut the space complexity we need to use the iterative solution for this types of problem.
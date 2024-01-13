//! Print N to 1

//!Base case : n>=0

function print(n){
    if(n<=0){
        return;
    }
    console.log(n);
    return print(n-1);
}
print(5);

//! it will take a time complexity of O(n) also it will take an Auxilary space of O(n), that's why to cut the space complexity we need to use the iterative solution for this types of problem.
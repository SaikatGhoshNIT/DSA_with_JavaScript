function checkForSort(n) {
    
    for(let i = 0; i<n.length-1;i++){
        if(n[i]>n[i+1]){
            return false
        }
    }
    return true
}


console.log(checkForSort([10,20,30,40,20]) ? "Yes!!!" : "NO");
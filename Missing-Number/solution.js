function missingNumber(arr) {
    arr.sort();
    for(let i=0; i<arr.length; i++) {
      if(arr[i] != i+1) {
        return i+1;
      }
    }
    return -1;
  }
  
  missingNumber([1, 2, 3, 5])
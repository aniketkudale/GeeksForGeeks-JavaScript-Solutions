let twoSums = (arr, target) => {
    for(let i=0; i<arr.length; i++) {
        for(j=i+1; j<arr.length; j++) {
            if(arr[j] == target - arr[i]) {
                arr = [arr[i], arr[j]];
                console.log(arr);
            }
        }
    }
};

twoSums([2, 7, 11, 15], 9);        
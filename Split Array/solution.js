function splitArray(arr, k) {
    let size = arr.length;
    for(let i=0; i<k; i++) {
        let x = arr[0];
        for(let j=0; j<size; j++) {
            arr[j] = arr[j+1];
            console.log(arr, j);
        }
        arr[size-1] = x;
    }
    console.log("final: ", arr);
}

splitArray([1,2,3,4], 2);
// function rotCount(arr) {
//   let min = arr[0];
//   let count = -1;
//   for (let i=0; i<arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//       count = i;
//     }
//   }
//   return count;
// }

function rotCount(arr) {
    let min = Math.min(...arr);
    for(let i=0; i<arr.length; i++) {
      if(arr[i] === min) {
        return i;
      }
    }
  }
  
  rotCount([15,16,7,8,9,5])
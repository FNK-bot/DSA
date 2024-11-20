//merge sort 
function mergeSort(arr) {
    let n = arr.length;
    if (n < 2) {
        return arr
    }

    const mid = Math.floor(n / 2);
    const leftArray = arr.slice(0, mid);
    const rigthArray = arr.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rigthArray));
};
function merge(leftArray, rigthArray) {
    let sortedArr = [];
    while (leftArray.length && rigthArray.length) {
        if (leftArray[0] <= rigthArray[0]) {
            sortedArr.push(leftArray.shift())
        } else {
            sortedArr.push(rigthArray.shift())
        }
    }
    return [...sortedArr, ...leftArray, ...rigthArray]
}
let arr = [-9, 5, 8, 3, 60, -9];
arr = mergeSort(arr);
console.log(arr)
//O(n log n)
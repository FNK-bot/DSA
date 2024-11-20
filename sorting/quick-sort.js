//Quick sort

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let leftArray = [];
    let rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (pivot > arr[i]) {
            leftArray.push(arr[i])
        } else {
            rightArray.push(arr[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}
let arr = [-9, 5, 8, 3, 60, -9];
arr = quickSort(arr);
console.log(arr)
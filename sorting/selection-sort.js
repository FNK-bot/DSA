// Selection sort

function SelectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
        }

        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp
    }
    return arr
};

let arr = [-9, 5, 8, 3, 60, -9];
arr = SelectionSort(arr);
console.log(arr)
//O(n^2)
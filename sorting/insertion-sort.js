//Insertion Sort

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let current = arr[i];
        let j = i - 1;// old array sorted of j
        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--
        }

        arr[j + 1] = current;
    }
};

let arr = [-9, 5, 8, 3, 60, -9];
insertionSort(arr);
console.log(arr)
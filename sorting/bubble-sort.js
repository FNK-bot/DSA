function bubbleSort(arr) {
    let n = arr.length;
    let swapFlag = true
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapFlag = false
            }
        }
        if (swapFlag) {
            return
        }
    }
};

let arr = [-9, 5, 8, 3, 60, -9];
bubbleSort(arr);
console.log(arr)

// O(n * 2)
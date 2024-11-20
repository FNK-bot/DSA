function bubbleSort(arr) {
    let n = arr.length;
    let swapFlag = true //More Optimized
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapFlag = false
            }
        }
        if (swapFlag) {//Opt Continue
            return
        }//ends
    }
};

let arr = [-9, 5, 8, 3, 60, -9];
bubbleSort(arr);
console.log(arr)

// O(n * 2) worst case

// Best case O(n)
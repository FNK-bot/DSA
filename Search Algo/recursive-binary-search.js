// Recursive Binary Search

function recursiveBinaruySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, leftIndex, rigthIndex) {
    if (leftIndex > rigthIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rigthIndex) / 2);

    if (target == arr[middleIndex]) {
        return middleIndex;
    }

    if (target > arr[middleIndex]) {
        return search(arr, target, middleIndex + 1, rigthIndex);
    } else {
        return search(arr, target, leftIndex, middleIndex - 1);
    }
};

console.log(recursiveBinaruySearch([-5, 2, 4, 6, 10], 6));

//Time Coplexity Big O = O(log n)
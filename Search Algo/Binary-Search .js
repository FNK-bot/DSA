function binarySearch(arr, target) {
    let left = 0; //left index (usually starting from index 0 )
    let rigth = arr.length - 1;//Ending index

    //check whether the array is not empty
    while (left <= rigth) {
        //need to find the middle index to perform bs
        let mid = Math.floor((left + rigth) / 2);//floored value for even num

        //check is target is equal to mid
        if (arr[mid] == target) return mid;

        //if target greater than mid val
        if (target > arr[mid]) left = mid + 1;

        //if target less than mid val
        else rigth = mid - 1
    };

    //if not found 
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 2));

//Big O -O(log n) 
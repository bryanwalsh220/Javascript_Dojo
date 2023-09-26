// Quick Sort practice 

// const partition = (arr, low, high) => {
//     pivot = arr[low]
//     left = low
//     right = high

//     while (left <= right) {
//         while (arr[left] < pivot) {
//             left ++;
//         }
//         while (arr[right] > pivot) {
//             right--;
//         }
//         if (left<=right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left ++;
//             right--;
//         }
//     }
//     return right;
// };


// const quickSort = (arr, low, high) => {
//     if (low < high) {
//         const pivotIndex = partition(arr, low, high);
//         quickSort(arr, low, pivotIndex);
//         quickSort(arr, pivot + 1, high);
//     }
// };

// const sampleArr = [5,0,2,44,8,10,15,6,9,33,7];
// console.log(quickSort(sampleArr, 0, sampleArr.length - 1));

function quickSort(arr, left, right) {
    left = left || 0;
    right = right || arr.length - 1;

    const pivot = partition(arr, left, right);

    if (left < pivot - 1) {
        quickSort(arr, left, pivot - 1)
    }
    if (right > pivot ) {
        quickSort(arr, pivot, right)
    }
    return arr;
}

function partition(arr, left, right) { 
    const pivot = Math.floor((left + right / 2))

    while (left <= right) {
        while (arr[left] < arr[pivot])
            left++;

        while (arr[right] > arr[pivot])
        right--;
        
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--;
        }

    }
    return left;
}

(function test() {
    var testArr1 = [5,7,12,11,66,17,9,4,1]

    console.log(quickSort(testArr1))
}) ()
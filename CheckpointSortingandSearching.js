function insertionSort(arr) {
    let j = 1;
    let i =0;
    let val = 0;
    while (j < arr.length) {
       i = j -1;
        val = arr[j];
        while (i >= 0 && arr[i] > val) {
            arr[i+1] = arr[i]
            i = i-1;
        }
        arr[i+1] = val;
        j += 1;
    }
    return arr;
}

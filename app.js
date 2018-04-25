let arr = [1, 3, 2, 8, 5, 7, 6];

function bubbleSort(arr) {
    let i;
    let j;
    let temp;
    let len = arr.length;

    while(len--) {
        for(i = 0, j = 1; i < arr.length; i++, j++) {
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));
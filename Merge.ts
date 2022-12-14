function merge(arr1: number[], arr2: number[]): number[] {
    let newArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
            newArr.push(arr2.shift());
        } else {
            newArr.push(arr1.shift());
        }
    }

    if (arr1.length) {
        newArr = newArr.concat(arr1);
    }

    if (arr2.length) {
        newArr = newArr.concat(arr2);
    }

    return newArr;
}

function mergeSort(arr: number[]): number[] {
    if (arr.length === 1) return arr;

    let half = arr.length / 2;
    let l1 = arr.slice(0, half);
    let l2 = arr.slice(half, arr.length);

    l1 = mergeSort(l1);
    l2 = mergeSort(l2);

    return merge(l1, l2);
}
console.log(mergeSort([66, 512, 7, 3, 15, 85, 0, 12, 34]));

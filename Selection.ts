function selectionSort(arr: number[]) {
    for (let j = 0; j < arr.length; j++) {
        let min = Infinity,
            index = -1;
        for (let i = j; i < arr.length; i++) {
            if (Math.min(arr[i], min) === arr[i]) {
                min = arr[i];
                index = i;
            }
        }
        [arr[j], arr[index]] = [arr[index], arr[j]];
    }
    return arr;
}
console.log(selectionSort([11, 4, 14, 67, 31, 14, 15, 88, 1, 4]));

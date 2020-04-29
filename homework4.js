function binarySearch(arr, target) {
    let startIndex = 0
    let endIndex = arr.length - 1

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2)
        if (target > arr[middleIndex]) {
            startIndex = middleIndex + 1
        } else if (target < arr[middleIndex]) {
            endIndex = middleIndex - 1
        } else {
            return middleIndex
        }
    }
}
console.log(binarySearch([1, 3, 5, 7, 11, 13, 17, 19, 23], 3))

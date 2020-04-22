// 1
function removeFirstElement(arr, i = arr.length) {
    i === 0 ? arr.splice(i, 1) : removeFirstElement(arr, i -= 1);
    return arr
}

// 2
function changeKeyAndValue(obj) {
    let arr = [];
    let sameValArray = [];
    let sameVal;

    for (let key in obj) {
        if (!arr.includes(obj[key])) {
            obj[obj[key]] = key;
            arr.push(obj[key])
            sameVal = key
            delete obj[key]
        } else {
            obj[obj[key]] = sameValArray
            sameValArray.push(key)
            delete obj[key]
        }
    }
    sameValArray.unshift(sameVal);
    return obj
}

console.log(
    changeKeyAndValue({
        a: '1',
        b: '2',
        c: '2',
        d: '2',
    })
);

// 3
function sortedArrObj(arr) {
    arr = arr.filter(el => el.readStatus === true);
    return arr.sort((a, b) => b.percent - a.percent);
}

console.log(sortedArrObj([
    {book: 'Catcher in the Rye', readStatus: true, percent: 40},
    {book: 'Animal Farm', readStatus: true, percent: 20},
    {book: 'Solaris', readStatus: false, percent: 90},
    {book: 'The Fall', readStatus: true, percent: 50},
    {book: 'White Nights', readStatus: false, percent: 60},
    {book: 'After Dark', readStatus: true, percent: 70}
]));

// 4
function rotatesArray(arr, count, cnt = 1) {
    let rotateCount = 0;

    count > 0 ? rotateCount = arr.length - count : rotateCount = Math.abs(count);

    arr.unshift(arr[arr.length - 1]);
    arr.splice(arr.length - 1, 1);
    return cnt === rotateCount ? arr : rotatesArray(arr, count, cnt + 1)
}

// 5
function getNestedChildren(arr, id = null) {
    let root = {};

    for (let key in arr) {
        if (arr[key].parent === id) {
            root[arr[key].id] = getNestedChildren(arr, arr[key].id);
            delete arr[key].id;
            delete arr[key].parent;
        }
    }
    return root
}

console.log(getNestedChildren([
    {parent: null, id: 0},
    {parent: 0, id: 1},
    {parent: 0, id: 2},
    {parent: 1, id: 3},
    {parent: 1, id: 4},
    {parent: 2, id: 5},
    {parent: 4, id: 6},
]));

// 6
function addSubsets(arr, length) {
    let subSets = [];

    if (length === 1) {
        return getSubsets(arr, length)
    }

    for (let i = 0; i <= arr.length - length; i++) {
        subSets = subSets.concat(getSubsets(arr.slice(i, arr.length), length));
    }

    return subSets
}

function getSubsets(arr, length) {
    let subSets = [];

    if (arr.length === length) {
        subSets.push(arr);
        return subSets
    }

    for (let k = length; k <= arr.length; k++) {
        subSets.push(arr.slice(0, (length - 1)).concat(arr[k - 1]))
    }

    arr.splice(1, 1);
    return length > 2 ? subSets.concat(getSubsets(arr, length)) : subSets
}

// 7
let obj = {
    a: 1,
    b: 2,
    c: 3
};

Object.prototype.myMap = function (callback) {
    const resultArr = [];
    for (let i = 0; i < this.length; i++) {
        resultArr.push(callback(this[i], i, this))
    }
    return resultArr
};

Object.keys(obj).myMap((el) => {
    return el
});



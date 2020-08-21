// 版本排序
var arr = [[1, 2, 3], [0, 1, 3], [2, 3, 1], [0, 0], [0, 1, 2], [1, 1, 1]]
function order(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i][0] > arr[j][0]) { // 原则： 站对排序，个高的往后挪
                [arr[i], arr[j]] = [arr[j], arr[i]]
            } else if (arr[i][0] === arr[j][0]) {  // 个一样，再比其他
                let len1 = arr[i].length
                while (len1 > 0) {
                    let index = arr[i].length - len1
                    if (arr[i][index] > arr[j][index]) {
                        [arr[i], arr[j]] = [arr[j], arr[i]]
                    }
                    len1--
                }
            }
        }
    }
    return arr
}
console.log(order(arr))
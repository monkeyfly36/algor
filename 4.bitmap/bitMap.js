// 注：BitMap只能存储表示某个数是否存在，可以用于大数据去重，大数据排序，两个集合取交集

// 题：bitmap实现add和isExit方法
export const BitMap = function (size) {
    var arr = new Array(size)
    for (let i = 0; i < size; i++) {
        arr[i] = 0
    }

    this.add = function (val) {
        let arrIndex = Math.floor(val / 32)
        let bitIndex = Math.floor(val % 32)
        arr[arrIndex] = arr[arrIndex] | 1 << bitIndex
    }

    this.isExist = function (item) {
        let arrIndex = Math.floor(item / 32)
        let bitIndex = Math.floor(item % 32)
        return ((arr[arrIndex] & 1 << bitIndex) !== 0) ? true : false
    }
}
// 测试0-100, 4×32 > 100, 所以size为4
// var bit_map = new BitMap(4);
// var arr = [0, 3, 5, 6, 9, 34, 23, 78, 99];
// for (var i = 0; i < arr.length; i++) {
//     bit_map.add(arr[i]);
// }
// console.log(bit_map.isExist(3));
// console.log(bit_map.isExist(7));
// console.log(bit_map.isExist(78));
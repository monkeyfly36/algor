function insert_sort(arr, start, end){
    for(var i = start + 1; i <= end; i++){
        // 假设从arr[0]到arr[i-1]已经有序,那么只需要比较arr[i]和arr[i-1]的大小即可
        if(arr[i] < arr[i-1]){
            var tmp = arr[i]
            var j = i-1
            // 找到tmp应该在的位置
            while(j >= start && tmp < arr[j]) {
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1] = tmp
        }
    }
}

var arr = [7, 2, 8, 1, 4, 6, 9, 3]
insert_sort(arr, 0, arr.length-1)
console.log(arr)
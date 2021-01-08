/*
  leetcode 374. 猜数字
*/
var guessNumber = function(n) {
  var start = 1
  var end = n

  while(end >= start){
      console.log(start,end)
      var mid = Math.floor((start + end)/2)
      switch(guess(mid)){
          case -1 : 
             end = mid
             break;
          case 1 : 
              start = mid+1
              break;
          case 0 : 
              return mid
              break;
      }
      
  }
}
// 1.清楚函数功能;2.甩锅;3.在递归结果上操作;4.找到递归终止条件

// 例.汉诺塔结构--将A上的圆盘全部移动到C上，一次只能移动一个圆盘，而且要保证大圆盘不能放在小圆盘的上面

// 1.pillar_A上有n个圆盘,现在要将圆盘移动到pillar_C上,借助pillar_B
function hanoi(n, pillar_A, pillar_B, pillar_C){
  if(n == 1) {
      console.log("move: "+ pillar_A + "---->" + pillar_C)
  } else {
      // 2.借助pillar_C,将A上n-1个圆盘移动到pillar_B
      hanoi(n-1, pillar_A, pillar_C, pillar_B)
      // 3.将A上最后一个圆盘移动到pillar_C
      console.log("move: "+ pillar_A + "---->" + pillar_C)
      // 4.借助pillar_A, 将B上n-1个圆盘移动到pillar_C
      hanoi(n-1, pillar_B, pillar_A, pillar_C)
  }
}

hanoi(5, "A", "B", "C");
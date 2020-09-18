// 1.概念 图Graph=(V, E)， 顶点和边
// 树和森林是一种图
// 有向图，无向图和完全图
// 权 边具有与之相关的数值，可以表示从一个顶点到另一个顶点的距离，耗费的时间，这个数值称之为权重
// 邻接顶点 在无向图中，一条边是(u,v)，那么u和v互为邻接顶点，在有向图中，是一条边，那么顶点u邻接到顶点v，顶点v邻接自顶点u
// 子图 
// 度 边的和
// 连通图--在无向图中，任意两个顶点之间都是连通的
// 连通分量--非连通图的极大连通子图，所谓极大连通子图，是指包含顶点个数极大
// 强连通图--有向图中，任意两点都是连通的
// 强连通分量--非强连通图的极大强连通子图
// 生成树--在无向图中，极小连通子图,其生成树有n-1条边构成

// 2.图的存储结构--都以无向为例，有向太复杂
// 2.1邻接矩阵--二维数组
// 2.2邻接表--NoteTable-数组，出边表-链表

// 注：二叉搜索树的搜索过程，就是深度优先遍历，而分层打印二叉树则是广度优先遍历
const Queue = require("./queue")
var max_value = 9999

const Graph = function() {
// function Graph(){
    var maps = []
    var node_num = 0
    var edge_num = 0
    this.init = function(input_maps){
        maps = input_maps;
        node_num = this.get_node_num()
        edge_num = this.get_edge_num()
    }
    // 获得顶点的个数
    this.get_node_num = function(){
        if(node_num !=0) {
            return node_num
        }
        return maps.length
    }
    //获得边的个数 
    this.get_edge_num = function(){
        if(edge_num !=0){
            return edge_num;
        }
        var count = 0;
        for(var i = 0;i < node_num;i++){
            for(var j = i+1; j< node_num;j++){
                if(maps[i][j]>0 && maps[i][j]<max_value){
                    count++
                }
            }
        }
        console.log(count)
        return count
    };
    // 获得边的权重
    this.get_weight = function(u, v){
        return maps[u][v]
    }

    // 连通图--深度优先遍历
    var graph_dfs = function(v, visited, component) { // component 连通分量
        visited[v] = 1   //表示v已经访问过
        console.log(v)
        component.push(v)
        var row = maps[v]
        for(var i=0; i<row.length;i++){
            if(row[i] < max_value && visited[i] == 0){
                // v与i 是连通的,且i还没有被遍历过
                graph_dfs(i, visited, component)
            }
        }
    }
    //从顶点v开始深度优先遍历图
    this.dfs = function(v){
        var visited = new Array(node_num)
        var component = []   // 存储连通分量
        for(var i = 0; i < node_num; i++){
            visited[i] = 0
        }
        graph_dfs(v, visited, component)
        return component
    }
    // 连通图--广度优先遍历
    var graph_bfs = function(v, visited, component){
        var queue = new Queue()
        queue.enqueue(v)
        visited[v] = 1   //表示v已经访问过
        console.log(v)
        component.push(v)
        while(!queue.isEmpty()){
            var visited_v = queue.dequeue()
            var row = maps[visited_v]
            for(var i = 0; i < row.length; i++){
                if(row[i] < max_value && visited[i]==0){
                    // v 与i 是连通的,且i还没有被遍历过
                    queue.enqueue(i)
                    visited[i] = 1   //表示v已经访问过
                    console.log(i)
                    component.push(i)
                }
            }
        }
    }
    this.bfs = function(v){
        var visited = new Array(node_num)
        var component = []
        for(var i = 0; i < node_num; i++) {
            visited[i] = 0
        }
        graph_bfs(v, visited, component)
        return component
    }
    // 连通分量--遍历整张图
    this.components = function(){
        var visited = new Array(node_num)
        var component_lst = []
        for(var i = 0; i < node_num; i++){
            visited[i] = 0
        }

        for(var i = 0; i < node_num; i++){
            if(visited[i] === 0){
                var component = []
                graph_bfs(i, visited, component)
                component_lst.push(component)
            }
        }
        return component_lst
    }
    // 应用--1.最小生成树 权值之和最小的那棵生成树
}

// var maps = [
//     [0,  28, max_value, max_value, max_value,  10, max_value],
//     [28, 0, 16, max_value, max_value,max_value, 14 ],
//     [max_value, 16, 0, 12, max_value, max_value, max_value],
//     [max_value, max_value, 12, 0, 22, max_value, 18],
//     [max_value, max_value, max_value, 22, 0, 25, 24],
//     [10, max_value, max_value, max_value, 25, 0, max_value],
//     [max_value, 14, max_value, 18, 24, max_value, 0]
// ];
// var graph = new Graph();
// graph.init(maps);
// console.log(graph.get_edge_num)
module.exports = Graph 

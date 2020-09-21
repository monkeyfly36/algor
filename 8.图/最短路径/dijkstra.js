// dijkstra（迪杰斯特拉）算法按路径长度的递增次序，逐步产生最短的路径，它可以算出始点到其他各点的最短距离
// ?最短路径，总是在“由已经产生的最短路径上再扩充一条边”

var INF = 9999;
function dijkstra(graph, start, end){
    var v_arr = [];     // 记录已经考察过的点
    var dis = {};       // 记录从start到各个点的最小距离
    var path = {}       // 记录路径

    for(var key in graph) { // 初始化
        dis[key] = INF
        path[key] = start
    }
    dis[start] = 0

    var min_v = start
    while(true){
        v_arr.push(min_v)
        // 得到min_v所连接的点
        var v_link = graph[min_v]
        for(var key in v_link) {
            // 从 start出发,经过min_v到达 key这个点的长度小于之前发现的最短路径
            if(dis[min_v] + v_link[key] < dis[key]){
                dis[key] = dis[min_v] + v_link[key];
                path[key] = min_v;   //从start出发到达key的最短路径中,一定要通过min_v到达key
            }
        }

        // 从剩余的没有处理过的点中选取具有最短路径的顶点
        var min_dis = INF;
        for(var key in graph){
            if(v_arr.indexOf(key) >= 0){
                continue;
            }

            if(dis[key] < min_dis){
                min_dis = dis[key];
                min_v = key;
            }
        }
        if(min_dis == INF){
            break;
        }
    }

    // 输出最短路径
    var link_path = [];
    var tmp_v = path[end];
    link_path.push(end);
    while(tmp_v){
        link_path.push(tmp_v);
        tmp_v = path[tmp_v];
        if(tmp_v === start){
            link_path.push(start);
            break;
        }
    }
    // console.log(path)
    console.log(link_path);
};

var graph_dict = {
    "0":{"5":2, "4":3},    // 表示从0可以到5,权值为2, 0可以到4,权值为3
    "1":{"2":7, "3":7, "4":2, "5":2},
    "2":{"8":8, "6":7, "1":7},
    "3":{"6":2, "10":3, "7":1, "1":7},
    "4":{"1":2, "7":3, "0":3},
    "5":{"14":10, "1":2, "0":2},
    "6":{"9":1, "12":4, "3":2, "2":7},
    "7":{"3":1, "11":2, "4":3},
    "8":{"9":4, "2":8, "14":1},
    "9":{"13":9, "6":1, "8":4},
    "10":{"12":6, "11":8, "3":3},
    "11":{"10":8, "7":2},
    "12":{"13":2, "10":6, "6":4},
    "13":{"12":2, "9":9}
};
dijkstra(graph_dict, "1", "13");
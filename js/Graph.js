function Graph() {
    var vertices = [];//用于保存顶点
    var adjList = [];//用于保存边，以顶点作为Key

    /*
    * 添加顶点
    * */
    this.addVertex = function (v) {
        vertices.push(v);
        adjList[v] = [];
    }

    this.addEdge = function (v,w) {
        //无向图
        adjList[v].push(w);
        adjList[w].push(v);
    }

    this.print = function () {
        var result = '';
        for (var i = 0;i<vertices.length;i++){
            var v = vertices[i];
            var edges = adjList[v];
            result += v
            result += "-->"
            if(edges){
                for (var j = 0;j<edges.length;j++){
                    result += edges[j];
                    result += " ";
                }
            }
            result += "\n";
        }
        console.log(result);
    }

    /*
    * 初始化颜色
    * */
    var initColor = function () {
        var color = [];
        for(var i = 0;i<vertices.length;i++){
            var key = vertices[i];
            color[key] = 'white';
        }
        return color;
    }

    /*
    * 广度优先搜索
    * */
    this.bfs = function (v,callback) {
        var color = initColor();
        var queue = new Queue();
        queue.enqueue(v);
        while (!queue.isEmpty()) {//一直判断队列是否为空
            var u = queue.dequeue();
            var edges = adjList[u];
            color[u] = 'gray';//访问过了
            if(edges && edges.length > 0){
                for(var i = 0;i<edges.length;i++){//遍历所有的邻接点
                    var value = edges[i];
                    if(color[value] === 'white'){
                        queue.enqueue(value);
                        color[value] = 'gray';//未被访问过的顶点在入除后时标记为灰色
                    }
                }
                color[u] = 'black';
                if(callback){
                    callback(u);
                }
            }
        }
    }
    /*
    * 深度优先搜索
    * */
    this.dfs = function (v,callback){
        var color = initColor();
        for(var i = 0;i<vertices.length;i++){
            var value = vertices[i];
            if(color[value] === 'white'){
                dfsVisit(value,color,callback)
            }
        }
    };
    var dfsVisit = function (v,color,callback) {
        color[v] = 'gray';
        if(callback){
            callback(v);
        }
        var edgs = adjList[v];
        for(var i = 0;i<edgs.length;i++){
            var w = edgs[i];
            if(color[w] === 'white'){
                dfsVisit(w,color,callback);
            }
        }
        color[v] = 'black';
    }
}
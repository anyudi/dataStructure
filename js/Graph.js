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

}
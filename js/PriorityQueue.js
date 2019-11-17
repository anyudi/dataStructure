function PriorityQueue() {
    var items = [];
    var priority,item;

    function PriorityQueue(item,priority) {
        this.priority = priority;
        this.item = item;
    }
    //入队列
    this.enqueue = function (item,priority) {
        var elememt = new  PriorityQueue(item,priority);
        if(this.isEmpty()){
            items.push(elememt);
        }else{
            var isInsert = false;//是否已经插入
            for(var i = 0;i<this.size();i++){
                if(elememt.priority < items[i].priority){
                    items.splice(i,0,elememt);
                    isInsert = true;
                    break;
                }
            }
            if(!isInsert){//没有插入过直接插入到最后
                items.push(elememt);
            }
        }
    }

    //出队列
    this.dequeue = function () {
        if(this.isEmpty()){
            return null;
        }
        return items.shift();
    }

    //获取队列第一个元素
    this.fromt = function () {
        if(this.isEmpty()){
            return null;
        }
        return items[0];
    }
    //判断队列是否为空
    this.isEmpty = function () {
        if(items.length > 0){
            return false;
        }
        return true;
    }

    //清空队列
    this.clear = function () {
        items = [];
    }

    //获取队列的大小
    this.size = function () {
        return items.length;
    }

    //打印队列信息
    this.print = function () {
        console.log(JSON.stringify(items));
    }
}

function Queue() {
    var items = [];

    //入队列
    this.enqueue = function (item) {
        items.push(item);
    }

    //出队列
    this.dequeue = function () {
        if(this.isEmpty()){
            return null;
        }
        return items.shift();
    }

    //获取队列第一个元素
    this.front = function () {
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
        console.log(items.toString());
    }
}

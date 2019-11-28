function Heap() {
    var items = [];
    /*
    * 判断是否为空
    * */
    this.isEmpty = function () {
        return items.length === 0;
    }

    /*
    * 返回堆的大小
    * */
    this.size = function () {
        return items.length;
    }

    /*
    * 返回父节点的索引值
    * */
    this.parentNode = function (index) {
        if(index !== 0){
            return parseInt((index - 1)/2);
        }
        return -1;
    }

    /*
    * 返回左孩子节点的索引值
    * */
    this.leftChild = function (index) {
        return 2*index + 1;
    }

    /*
    * 返回右孩子节点的索引值
    * */
    this.rightChild = function (index) {
        return 2*index + 2;
    }

    /*
    * 向堆 中插入元素
    * */
    this.insert = function (data) {
        items.push(data);
        this.siftUp(items.length - 1);
    }
    
    /*
    * 上浮
    * */
    this.siftUp = function (index) {
        var parentIndex = this.parentNode(index);
        while (index > 0 && items[index] > items[parentIndex]){
            var temp = items[parentIndex];
            items[parentIndex] = items[index];
            items[index] = temp;
            index = parentIndex;
        }
    }

    /*
    * 删除最大元素
    * 1：取出最大元素
    * 2：用最小元素替换最大元素
    * 3：删除最小位置的数
    * 4：作用下沉操作重新构造堆
    * */
    this.deleteMax = function () {
        if(items.length === 0){
            return null;
        }
        var max = items[0];
        var last = items[items.length - 1];
        items[0] = last;
        items[items.length - 1] = max;
        items.pop();
        this.siftDown(0)

        return max;
    }

    /*
    * 下沉
    * */
    this.siftDown = function (index) {
        while (this.leftChild(index) < items.length){
            var leftIndex = this.leftChild(index);//找出左节点索引位置
            if(leftIndex + 1 < items.length && items[leftIndex + 1] > items[leftIndex]){//有右节点，并且右节点大于左节点时，替换成右节点
                leftIndex ++;
            }
            if(items[index] >= items[leftIndex]){
                break;
            }
            // 交换
            var temp = items[index];
            items[index] = items[leftIndex];
            items[leftIndex] = temp;
            index = leftIndex;
        }
    }

    this.print = function () {
        console.log(JSON.stringify(items));
    }
}
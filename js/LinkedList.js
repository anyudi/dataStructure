function LinkedList() {
    var Node = function (data) {
        this.data = data;
        this.next = null;
    };
    var head = null;
    var length = 0;

    /*
    * 向链表中添加节点
    * */
    this.append = function (data) {
        var node = new Node(data);//初始化节点
        if(!head){
            head = node;
        }else{
            var curNode = head;//从head结点开始查找
            //循环查找，直到找到最后一个
            while (curNode.next){
                curNode = curNode.next;
            }
            curNode.next = node;
            length ++;
        }
    }

    /*
    * 向指定位置插入节点
    * */
    this.insert = function (data,index) {
        if(index < 0 || index >= length){
            console.log('位置错误');
            return false;
        }
        var curNode = head;
        var node = new Node(data);
        if(index === 0){//添加在开头位置
            node.next = head;
            head = node;
            length ++;
        }else{
            var curIndex = 0;
            var preNode = null;
            while (curIndex < index){
                curIndex ++;
                preNode = curNode;
                curNode = curNode.next;
            }
            node.next = curNode;
            preNode.next = node;
            length ++;
            return true;
        }
        return false;
    }

    /*
    * 删除指定节点
    * */
    this.remove = function (data) {
        var curNode = head;
        var preNode = null;
        for(var i = 0;i < length;i++){
            if(curNode && curNode.data === data){
                preNode.next = curNode.next;
                curNode = null;
                length --;
                return true;
            }
            preNode = curNode;
            curNode = curNode.next;
        }
        return false;
    }

    /*
    * 删除指定位置的节点
    * */
    this.removeAt = function (index) {
        if(index < 0 || index >= length){
            console.log('位置错误');
            return false;
        }
        var curNode = head;
        if(index === 0){//删除head
            head = curNode.next;
            length --;
        }else{
            var curIndex = 0;
            var preNode = null;
            while (curIndex < index){
                curIndex ++;
                preNode = curNode;
                curNode = curNode.next;
            }
            preNode.next = curNode.next;
            curNode = null;
            length --;
            return true;
        }
        return false;
    }

    /*
    * 获取节点的位置
    * */
    this.indexOf = function (data) {
        var curNode = head;
        for(var i = 0;i < length;i++){
            if(curNode && curNode.data === data){
                return i;
            }
            curNode = curNode.next;
        }
        return -1;
    }

    /*
    * 获取指定位置的节点
    * */
    this.getNodeAt = function (index) {
        if(index < 0 || index >= length){
            console.log('位置错误');
            return null;
        }
        var curNode = head;
        if(index === 0){//添加在开头位置
            return curNode;
        }else{
            var curIndex = 0;
            while (curIndex < index){
                curIndex ++;
                curNode = curNode.next;
            }
            return curNode;
        }
        return null;
    }

    /*
    * 判断链表是否为空
    * */
    this.isEmpty = function () {
        return length === 0;
    }

    /*
    * 获取链表的长度
    * */
    this.size = function () {
        return length;
    }

    /*
    * 获取头节点
    * */
    this.getHead = function () {
        return head;
    }

    /*
    * 清空链表
    * */
    this.clear = function () {
        head = null;
        length = 0;
    }

    /*
    * 转成字符串
    * */
    this.toString = function () {
        var result = '';
        if(!this.isEmpty()){
            var curNode = head;
            result = curNode.data;
            while (curNode.next){
                curNode = curNode.next;
                result += '->' + curNode.data;
            }
        }
        return result;
    }
    
    /*
    * 打印
    * */
    this.print = function () {
        console.log(this.toString())
    }
}
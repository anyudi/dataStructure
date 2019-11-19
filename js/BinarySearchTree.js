function BinarySearchTree() {
    var Node = function (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    var root = null;

    /*
    * 插入节点
    * */
    this.insert = function (data) {
        var node = new Node(data);
        if (!root) {
            root = node;
        }else{
            insertNode(root,data);
        }
    }

    /*
    * 递归插入
    * */
    var insertNode = function (node,data) {
        var curNode = null;
        if(data > node.data){//往右边插
            curNode = node.right;
            if (curNode){
                insertNode(curNode,data);
            }else{
                node.right = new Node(data);
            }
        }else{//往左边插
            curNode = node.left;
            if (curNode){
                insertNode(curNode,data);
            }else{
                node.left = new Node(data);
            }
        }
    }

    /*
    * 查找
    * */
    this.search = function (data) {
        return searchtNode(root,data)
    }

    var searchtNode = function (node,data) {
        if(!node){
            return false;
        }
        if(data > node.data){//往右边搜索
            return searchtNode(node.right,data);
        }else if(data < node.data){//往左边搜索
            return searchtNode(node.left,data);
        }else{
            return true;
        }
        return false;
    }
    /*
    * 中序遍历
    * */
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root,callback);
    }

    var inOrderTraverseNode = function (node,callback) {
        if(node){
            inOrderTraverseNode(node.left,callback);//先遍历左边
            callback(node.data);//打印中间的节点
            inOrderTraverseNode(node.right,callback);//最后遍历左边
        }
    }

    /*
    * 前序遍历
    * */
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root,callback);
    }
    var preOrderTraverseNode = function (node,callback) {
        if(node){
            callback(node.data);
            preOrderTraverseNode(node.left,callback);//遍历左边
            preOrderTraverseNode(node.right,callback);//遍历右边
        }
    }
    /*
    * 后序遍历
    * */
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root,callback)
    }
    var postOrderTraverseNode = function (node,callback) {
        if(node){
            postOrderTraverseNode(node.left,callback);//遍历左边
            postOrderTraverseNode(node.right,callback);//遍历右边
            callback(node.data);
        }
    }

    /*
    * 删除
    * */
    this.remove = function (data) {
        root = removeNode(root,data)
    }

    var removeNode = function (node,data) {
        if(!node){
            return null;
        }
        if (node.data < data){//在右节点上的情况
            node.right = removeNode(node.right,data);
            return node;
        }else if(node.data > data){//在左节点上的情况
            node.left = removeNode(node.left,data);
            return node;
        }else {//相等的情况
            //左节点和右节点都为空的情况
            if(node.right === null && node.left === null){
                node = null;
                return node;
            }else if(node.right === null){//没有右节点的情况
                node = node.left;
                return node;
            }else if(node.left === null){//没有左节点的情况
                node = node.right;
                return node;
            }else{//同时具有左节点和子节点的情况
                var rightMinNode = getMinNode(node.right);//找出右子树中最小的节点
                node.data = rightMinNode.data;//将最小节点的值赋值到当前节点
                node.right = removeNode(node.right,rightMinNode.data);//删除右树中最小的节点
                return node;
            }
        }
    }

    var getMinNode = function (node) {
        if(node){
            while (node && node.left){
                node = node.left;
            }
            return node;
        }
        return null;
    }

    /*
    * 获取最大的节点
    * */
    this.getMax = function () {
        return maxNode(root)
    }
    var maxNode = function (node) {
        if(node){
            while (node && node.right){
                node = node.right;
            }
            return node.data;
        }
        return node.data;
    }

    /*
    * 获取最小节点
    * */
    this.getMin = function () {
        return minNode(root);
    }


    var minNode = function (node) {
        if(node){
            while (node && node.left){
                node = node.left;
            }
            return node.data;
        }
        return null;
    }
}
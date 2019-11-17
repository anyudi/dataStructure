function Stack() {
    var items = [];

    //入栈
    this.push = function (item) {
        items.push(item);
    }

    //出栈
    this.pop = function () {
        if(this.isEmpty()){
            return null;
        }
        return items.pop();
    }

    //获取栈顶元素
    this.peek = function () {
        if(this.isEmpty()){
            return null;
        }
        return items[items.length - 1];
    }
    //判断栈是否为空
    this.isEmpty = function () {
        if(items.length > 0){
            return false;
        }
        return true;
    }

    //清空栈
    this.clear = function () {
        items = [];
    }

    //获取栈的大小
    this.size = function () {
        return item.length;
    }

    //打印栈信息
    this.print = function () {
        console.log(items.toString());
    }
}
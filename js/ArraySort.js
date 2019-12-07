function ArraySort() {
    var list = [];

    /*
    * 插入数据
    * */
    this.insert = function(item){
        list.push(item)
    };

    /*
    *冒泡排序
    * */
    this.bubblingSort = function () {
        var size = list.length;
        for(var i = 0;i<size;i++){
            for(var j = 0;j<size - i - 1;j++){
                if(list[j] > list[j + 1]){
                    swap(j,j+1);
                }
            }
            console.log('第'+(i + 1)+'次排序后的结果：     '+list.toString());
        }
    }

    /*
    * 插入排序
    * */
    this.insertSort = function () {
        var size = list.length;
        var j = 0;
        for(var i = 0;i<size;i++){
            j = i + 1;
            while (list[j-1] > list[j]){
                swap(j,j - 1);
                j --;
            }
            console.log('第'+(i + 1)+'次排序后的结果：     '+list.toString());
        }
    }

    /*
    * 选择排序
    * */
    this.selectSort = function () {
        var size = list.length;
        if(size.length <=1){
            return;
        }
        var minIndex,i,j;
        for(i = 0;i<size;i++){
            minIndex = i;
            for(j = i + 1;j<size;j++){
                if(list[j] <list[minIndex]){
                    minIndex = j;
                }
            }
            if(i !== minIndex){
                swap(i,minIndex);
            }
            console.log('第'+(i + 1)+'次排序后的结果：     '+list.toString());
        }
    }

    /*
    * 归并排序
    * */
    this.mergeSort = function () {
        list = mergeSortRec(list);
    }
    /*
    * 拆分成小数组
    * */
    var mergeSortRec = function (array) {
        var size = array.length;
        if(size === 1){
            return array;
        }
        //从中间分割
        var mid = array.length / 2,
            left = array.slice(0,mid),
            right = array.slice(mid,size);
        return mergeArray(mergeSortRec(left),mergeSortRec(right));
    }

    /*
    * 合并数组
    * */
    var mergeArray = function (left,right) {
        var result = [];
        var il = 0,
            ir = 0;
        while (il < left.length && ir < right.length){
            if(left[il] < right[ir]){
                result.push(left[il++])
            }else {
                result.push(right[ir++]);
            }
        }
        while (il < left.length){
            result.push(left[il++])
        }
        while (ir < right.length){
            result.push(right[ir++]);
        }
        return result;
    }

    /*
    * 快速排序
    * */
    this.quickSort = function () {
        quick(list,0,list.length - 1);
    }

    var quick = function (array,left,right) {
        var i,j,temp;
        i=left;
        j=right;
        debugger
        if(i < j){
            temp = array[left]
            while (i !== j){
                while(j > i && array[j] >= temp){
                    //先从右边开始找,直到找到一个小于temp的值
                    j --;
                }

                while (i < j && array[i] <= temp){
                    //先从左边开始找,直到找到一个大于temp的值
                    i ++;
                }
                if(i < j){//交换
                    swap(i,j);
                }
            }
            array[left] = array[i];
            array[i] = temp;
            quick(array,left,i - 1);
            quick(array,i+1,right)
        }
    }

    /*
    * 交换数组
    * */
    var swap = function (per,next) {
        var temp = list[per];
        list[per] = list[next];
        list[next] = temp;
    }
    /*
    * 打印
    * */
    this.print = function () {
        console.log(list.join("  "));
    }

}
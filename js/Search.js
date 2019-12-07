function Search() {
    /*
    * 顺序搜索
    * */
    this.sequentialSearch = function (array,item) {
        if(array){
            for(var i = 0;i<array.length;i++){
                if(item === array[i]){
                    return i;
                }
            }
        }
        return -1;
    }

    /*
    * 二分搜索
    * */
    this.binarySearch = function (array,item) {
        if(array){
            array = array.sort();
            var start = 0,
                end = array.length - 1,
                mid,
                element;
            while (start <=end){
                mid = Math.floor((start + end) / 2);
                element = array[mid];
                if(item === element){
                    return mid
                }else if(item < element){
                    end = mid - 1;
                }else{
                    start = mid + 1;
                }
            }
        }
        return -1;
    }
}
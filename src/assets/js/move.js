var swapItems = function (arr, index1, index2, direction) {
    if (direction == 'up') {//置顶
        arr.unshift(arr[index1]);
        arr.splice(index1 + 1, 1);
        return arr;
    }
    if (direction == 'down') {//置底
        arr.push(arr[index1]);
        arr.splice(index1, 1);
        return arr;
    }
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
};
//然后js调用
function upIndex(index) {//置顶
    if (index == 0) {
        return;
    }
    swapItems(myAppList, index, 0, 'up');
};
function up(index) {//上移
    if (index == 0) {
        return;
    }
    swapItems(myAppList, index, index - 1);
};
function down(index) {//下移
    if (index == myAppList.length - 1) {

        return;
    }
    swapItems(myAppList, index, index + 1);
};
function downIndex(index) {//置底
    if (index == myAppList.length - 1) {

        return;
    }
    swapItems(myAppList, index, 0, 'down');
}
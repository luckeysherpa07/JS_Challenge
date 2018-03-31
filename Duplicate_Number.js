
//find duplicate in array
function findDuplicate(arr) {
    var len=arr.length;
    var finalArr = [];
    var obj = {}; 
    for (var i=0; i<len; i++)
    {
    obj[arr[i]]=0;
    }
    for (i in obj) {
    finalArr.push(i);
    }
    return finalArr;
}
console.log(findDuplicate([1,2,3,3,3,2,6,1,8]) + "<br>");

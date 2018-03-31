
    //union of array
    function unionArr(arr1,arr2){
    var result = [...new Set([...arr1,...arr2])];
    return result;
}
console.log(unionArr([1,23,65,45,56],[45,67,78,56]) + "<br>");

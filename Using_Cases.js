
//USING CASES
//using ForEach
function usingForEach(){
    var num = [1,2,3];
    num.forEach(function(element){
        console.log(element + "<br>");
    });

}
usingForEach();

//using Map
function usingMap(num){
    var arr = num.map(x => x + 1);
    console.log(arr);
}
usingMap([1,2,3]);


//using Fliter
function usingFilter(num){
    var arr = num.filter(x => x > 5);
    console.log(arr);
}
usingFilter([1,2,3,7,8,9]);


//using Some
function usingSome(num){
    var arr = num.some(x => x > 0);
    console.log(arr);
}
usingSome([1,2,3,4,5]);


//using Every
function usingEvery(num){
    var arr = num.every(x => x > 2);
    console.log(arr);
}
usingEvery([1,2,3,4]);


//using Reduce
function usingReduce(num){
    var result = num.reduce((a,b) => a + b);
    console.log(result);
}
usingReduce([1,2,3,4,5]);

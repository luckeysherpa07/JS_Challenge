
    //humanize number
    function humanizeNumber(num){
    var arr = num.toString().split("");
    var lastIndex =  arr.length-1;
    var result;
    if(arr[lastIndex] == 1){
        result = num + "st";
    } else if (arr[lastIndex] == 2){
        result = num + "nd";
    }else if (arr[lastIndex] == 3){
        result = num + "rd";
    }else{
        result = num + "th";
    }
    console.log(result);
}
humanizeNumber(381);
humanizeNumber(382);
humanizeNumber(383);
humanizeNumber(384);


    //longest country name
    function longestCountry(arr){
    var point = 0;
    var largest;
    for(var i = 0; i< arr.length; i++){
        if(arr[i].length > point){
            point = arr[i].length;
            largest = arr[i];
        }
    }
    return largest;
}
console.log(longestCountry(['nepal','combodia','USA']) + "<br>");

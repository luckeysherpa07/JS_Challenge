
//Reversing String
function revStri(stringValue){
    return stringValue.split("").reverse("").join("");
}
console.log(revStri("Hello"));


//String in Alphabetical Order
function alphaStri(stringValue){
    return stringValue.split("").sort().join("");
    
}
console.log(alphaStri("hello"));

//Uppercasing first letter
function uppercaseLetter(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
console.log(uppercaseLetter("this is a test."));

//count vowel
function countVowel(str){
    var count = 0;
    for (var i = 0; i < str.length; i++){      
        if(str.charAt(i).match(/[aeiouAEIOU]/)){
            count += 1;
        }
    }
    return count;
}
console.log(countVowel("abcdeiouz") );

//datatype
function typeArg(a){
    return typeof(a);
}
console.log(typeArg(34) );

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
console.log(longestCountry(['nepal','combodia','USA']) );

//Array Or Not
function isArr(a){
    return Array.isArray(a);
}
console.log(isArr(['ram','shyam']) );

//clone array
function cloneArr(arr){
    var clone = arr.slice(0);
    return clone;
}
console.log(cloneArr(['ram','shyam','hari']) );

//SORTING
//Bubble Sort
function bubbleSort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
            var temp = x[i];
            x[i] = x[i+1];
            x[i+1] = temp;
            swapp = true;
            }
        }
        n--;
    } while (swapp);
return x; 
}
console.log(bubbleSort([1,9,2,8,3]));



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
console.log(findDuplicate([1,2,3,3,3,2,6,1,8]) );

//union of array
function unionArr(arr1,arr2){
    var result = [...new Set([...arr1,...arr2])];
    return result;
}
console.log(unionArr([1,23,65,45,56],[45,67,78,56]) );

//random item from array
function randomItem(Arr){
    return Arr[Math.floor(Math.random()*Arr.length)];
}
console.log(randomItem([1,45,32,78]));

//FizzBuzz
function fizzBuzz(){
    for(var i = 0; i < 100 ; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if(i % 5 == 0){
            console.log("Buzz");
        }else if(i % 3 == 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}
console.log(fizzBuzz() );

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



    //datatype using arrow function
function typeArgArrow(a){
    a.map((b) => {
        console.log(typeof(b));
    });
}
typeArgArrow(["ES6",56])



//USING CASES
//using ForEach
function usingForEach(){
    var num = [1,2,3];
    num.forEach(function(element){
        console.log(element );
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


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
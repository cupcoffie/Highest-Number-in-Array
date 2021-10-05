//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:

// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11

function thirdNumber(array){
    var first = array[0]
    var second = array[0]
    var third = array[0]
    for(var i=0; i<array.length; i++){
        if(array[i] < first){
            third = second
            second = first
            first = array[i]
        }else if ((array[i] < second) && (array[i] > first)){
            third = second
            second = array[i]
        }else if((array[i] < third) && (array[i] > second)){
            third = array[i]
        }
    }
    return third
}
var x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
console.log(thirdNumber(x))
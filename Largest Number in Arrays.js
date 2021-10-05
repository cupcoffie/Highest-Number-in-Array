
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function max_of_array(y){
    max = y[0];
    for (var j = 1; j < y.length; j++){
      if (max < y[j]){
        max = y[j];
      }
    }
    return max;
  }
  
  master_array = [[4, 5, 1, 3, 7], [13, 27, 18, 26], [32, 35, 37, 39, 42, 51], [1000, 1001, 857, 1, 754, 125, 1452, 1.2]];
  largest_value_array = [];
  for (var i = 0; i < master_array.length; i++){
    max_of_array(master_array[i]);
    largest_value_array.push(max);
  }
  console.log(largest_value_array);
  
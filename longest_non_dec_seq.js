function longest_non_dec_seq(numbers) {
  var solutions = [];
  var solution_index = 0;
  solutions[solution_index] = 1;
  var longest_so_far = 1;
  for(var i = 1; i < numbers.length; ++i) { 
    solution_index = i;
    if(numbers[i] > numbers[i - 1]) {
      solutions[solution_index] = solutions[solution_index - 1] + 1;
    } else {
      solutions[solution_index] = 1;
    }
    
    longest_so_far = Math.max(solutions[solution_index], longest_so_far);
    console.log(i + ', ' + longest_so_far);    
  }

  console.log(longest_so_far);
  console.log('-------------');
  for(var i = 0; i < solutions.length; ++i) {
    console.log(i + ', ' + solutions[i])
  }
}

var input = [5, 3, 4, 8, 6, 7];
console.log(longest_non_dec_seq(input));



/* Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
C# method calling example:

string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ] */


function fizzbuzz(n) {
  let array = []
  let answer = []
  for (let i = 1; i < n + 1; i++) {
    array.push(i)
  }
  console.log(array)
  for (let i = 1; i < array.length + 1; i++) {
    if (i % 15 === 0) {
      answer.push('FizzBuzz')
    } else if (i % 5 === 0) {
      answer.push('Buzz')
    } else if (i % 3 === 0) {
      answer.push('Fizz')
    } else {
      answer.push(i)
    }
  }
  return answer
}

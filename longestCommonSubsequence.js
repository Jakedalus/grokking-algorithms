function longestCommonSubsequence(str1, str2) {

  let matrix = [];

  for (let i = -1; i < str1.length; i++) {
    matrix[i] = [];
    for (let j = -1; j < str2.length; j++) {
      if ( i === -1 || j === -1) {
        matrix[i][j] = 0; // sets matrix[-1][-1] outside the bounds equal to 0 so the equation works
      } else if (str1[i] === str2[j]) {
        matrix[i][j] = matrix[i-1][j-1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
      }

    }
  }

  return matrix;

}

console.log(longestCommonSubsequence('fosh', 'fort'));
console.log(longestCommonSubsequence('fosh', 'fish'));

// found online 
function getLcsLengths(str1, str2) {

      var result = [];

      for (var i = -1; i < str1.length; i = i + 1) {

        result[i] = [];



        for (var j = -1; j < str2.length; j = j + 1) {
          console.log(i, j, result);
          if (i === -1 || j === -1) {

            result[i][j] = 0;

          } else if (str1[i] === str2[j]) {

            result[i][j] = result[i - 1][j - 1] + 1;

          } else {

            result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);

          }

        }

      }

      return result;

    }

    // console.log(getLcsLengths('fosh', 'fort'));
// console.log(getLcsLengths('fosh', 'fish'));












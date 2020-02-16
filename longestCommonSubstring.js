function longestCommonSubstring(str1, str2) {

  let cell = [];

  for (let i = 0; i < str1.length; i++) {
    let row = [];
    for (let j = 0; j < str2.length; j++) {
      // console.log(cell, row);
      // console.log('row:', i, str1[i]);
      // console.log('col:', j, str1[j]);
      // console.log();
      if (str1[i] === str2[j]) {
        try {
          row.push(cell[i-1][j-1] + 1);
        } catch {
          row.push(0);
        }
        
      } else {
        row.push(0);
      }
    }
    cell.push(row);
  }

  return cell;

}

console.log(longestCommonSubstring('hish', 'fish'));
console.log(longestCommonSubstring('hish', 'vista'));
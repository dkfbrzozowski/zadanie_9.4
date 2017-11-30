
function drawTree() {
for (i = 0; i < 6; i++) {
  star = '';
  for (j = i; j < 6; j++) {
    star += ' ';
  }
  for (k = 0; k < (i * 2) - 1; k++) {
    star += '*';
  }
  console.log(star);
}  
for (i = 6; i < 9; i++) {
    star = '    ***';
  console.log(star);
  }
}
drawTree();
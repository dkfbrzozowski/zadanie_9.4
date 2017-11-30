
function drawTree() {
	for (i = 0; i < 5; i++) {
		star = '';
		for (j = i; j < 5; j++) {
			star += ' ';
		}
		for (k = 0; k < (i * 2) - 1; k++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree();

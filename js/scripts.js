
function drawTree(i) {
	for (var i = 0; i <= 5; i++) {
		var star = '';
		for (j = 0; j <= i; j++) {
			star += '*';	
		}
		console.log(star);
	}
}
drawTree();

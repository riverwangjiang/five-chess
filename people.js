chess.onclick = function(e){
	if (over) {
		return;
	}
	var x = e.offsetX,
		y = e.offsetY,
		i = Math.floor(x / 30),
		j = Math.floor(y / 30);
	if (chessBoard[i][j] == 0) {
		oneStep(i,j,me);
		if (me) {
			chessBoard[i][j] = 1;
			for (var k = 0; k < count; k++) {
				if (win[i][j][k]) {
					myWin[k]++;
					if (myWin[k] == 5) {
						alert("黑子赢了！");
						over = true;
					}
				}
			}
		}else{
			chessBoard[i][j] = 2;
			for (var k = 0; k < count; k++) {
				if (win[i][j][k]) {
					computerWin[k]++;
					if (computerWin[k] == 5) {
						alert("白子赢了！");
						over = true;
					}
				}
			}
		}
		me = !me;
	}
}

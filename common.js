var me =true;
var over =false;
var chessBoard = [];
for (var i = 0; i < 15; i++) {
	chessBoard[i] = [];
	for (var j = 0; j < 15; j++) {
		chessBoard[i][j]=0;
	}
}

var count = 0;
//赢法数组
var win=[];
//赢法统计数组
var myWin = [];
var computerWin = [];
//横线
for (var i = 0; i < 15; i++) {
	win[i] = [];
	for (var j = 0; j < 15; j++) {
		win[i][j]=[];
	}
}
for (var i = 0; i < 15; i++) {
	for (var j = 0; j < 11; j++) {
		for (var k = 0; k < 5; k++) {
			win[i][j+k][count] = true;
		}
		count++;
	}
}
//竖线
for (var i = 0; i < 15; i++) {
	for (var j = 0; j < 11; j++) {
		for (var k = 0; k < 5; k++) {
			win[j+k][i][count] = true;
		}
		count++;
	}
}
//斜线
for (var i = 0; i < 11; i++) {
	for (var j = 0; j < 11; j++) {
		for (var k = 0; k < 5; k++) {
			win[i+k][j+k][count] = true;
		}
		count++;
	}
}
//反斜线
for (var i = 0; i < 11; i++) {
	for (var j = 14; j >3; j--) {
		for (var k = 0; k < 5; k++) {
			win[i+k][j-k][count] = true;
		}
		count++;
	}
}
for (var i = 0; i < count; i++) {
	myWin[i] = 0;
	computerWin[i] = 0;
}
console.log(count);
var chess = document.getElementById('chess');
var context = chess.getContext('2d');
context.strokeStyle = "#bfbfbf";
for (var i = 0; i < 15; i++) {
	context.moveTo(15 + i*30,15);
	context.lineTo(15 + i*30,435);
	context.stroke();
	context.moveTo(15,15 + i*30);
	context.lineTo(435,15 + i*30);
	context.stroke();
}
var oneStep = function(i,j,me){
	context.beginPath();
	context.arc(15 + i*30,15 + j*30,13,0,2*Math.PI);
	context.closePath();
	var gradient = context.createRadialGradient(15 + i*30 +2,15 + j*30 - 2,13,15 + i*30 +2,15 + j*30 - 2,0);
	if (me) {
		gradient.addColorStop(0,"#0a0a0a");
		gradient.addColorStop(1,"#636766");
	}else{
		gradient.addColorStop(0,"#d1d1d1");
		gradient.addColorStop(1,"#f9f9f9");
	}
	
	context.fillStyle = gradient;
	context.fill();
}
var computer = document.getElementById('computer');
var people = document.getElementById('people');
var script = document.createElement('script');
var body = document.getElementsByTagName('body')[0];
computer.onclick = function(){
	script.src = "computer.js";
	computer.style.display = "none";
	people.style.display = "none";
}
people.onclick = function(){
	script.src = "people.js";
	computer.style.display = "none";
	people.style.display = "none";
}
body.appendChild(script);
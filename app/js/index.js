function draw(tel){
	var graph = document.getElementById("graph");
	graph.width = graph.width;
	var g = graph.getContext("2d");
    var fx = 125;
    var fy = 10;
	g.lineWidth = 8;
	g.lineCap = "round";
	g.strokeStyle = "#ccc";
	g.beginPath();
	g.arc(10+fx,10+fy,10,Math.PI/2,Math.PI*3/2,false);
	g.moveTo(10+fx,fy);
	g.lineTo(100+fx,fy);
	g.moveTo(10+fx,20+fy);
	g.lineTo(90+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(90+fx,30+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(fx,40+fy);
	g.lineTo(90+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.moveTo(120+fx,fy);
	g.lineTo(160+fx,fy);
	g.moveTo(180+fx,fy);
	g.lineTo(220+fx,fy);
	g.stroke();

	g.beginPath();
	g.arc(160+fx,10+fy,10,-Math.PI/2,0,false);
	g.moveTo(170+fx,10+fy);
	g.lineTo(170+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(250+fx,30+fy,10,-Math.PI/2,Math.PI,true);
	g.moveTo(240+fx,fy);
	g.lineTo(330+fx,fy);
	g.moveTo(250+fx,20+fy);
	g.lineTo(330+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(330+fx,10+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(240+fx,30+fy);
	g.lineTo(240+fx,40+fy);
	g.stroke();

	g.fillStyle = "#ccc";	
	g.font = "15px sans-serif";
	g.textAlign = "left";
	g.fillText("淮阴师范学院",300,90+fy);
	g.fillText("学生",230,120+fy);
	g.fillStyle = "#ddd";
	g.font = "16px sans-serif";
	g.fillText("TEL : (086)"+tel,125,220+fy);
	g.fillText("E-mail : ya@public.email.cn",125,250+fy);	
}
function shuoshuo(sha){
	var graph = document.getElementById("graph");
	graph.width = graph.width;
	var g = graph.getContext("2d");
    var fx = 125;
    var fy = 10;
	g.lineWidth = 8;
	g.lineCap = "round";
	g.strokeStyle = "#ccc";
	g.beginPath();
	g.arc(10+fx,10+fy,10,Math.PI/2,Math.PI*3/2,false);
	g.moveTo(10+fx,fy);
	g.lineTo(100+fx,fy);
	g.moveTo(10+fx,20+fy);
	g.lineTo(90+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(90+fx,30+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(fx,40+fy);
	g.lineTo(90+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.moveTo(120+fx,fy);
	g.lineTo(160+fx,fy);
	g.moveTo(180+fx,fy);
	g.lineTo(220+fx,fy);
	g.stroke();

	g.beginPath();
	g.arc(160+fx,10+fy,10,-Math.PI/2,0,false);
	g.moveTo(170+fx,10+fy);
	g.lineTo(170+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(250+fx,30+fy,10,-Math.PI/2,Math.PI,true);
	g.moveTo(240+fx,fy);
	g.lineTo(330+fx,fy);
	g.moveTo(250+fx,20+fy);
	g.lineTo(330+fx,20+fy);
	g.stroke();

	g.beginPath();
	g.arc(330+fx,10+fy,10,Math.PI/2,Math.PI*3/2,true);
	g.moveTo(240+fx,30+fy);
	g.lineTo(240+fx,40+fy);
	g.stroke();

	g.fillStyle = "#ccc";	
	g.font = "20px sans-serif";
	g.textAlign = "left";
	g.fillText("seatop.me",370,90+fy);
	g.fillStyle = "#ddd";
	g.font = "16px sans-serif";
	g.fillText(sha,120,180+fy);	
}
draw(" --- ---- ---- ");
var gc = document.getElementById("graph");
gc.ondblclick = function(){
	draw(" 176" + " 0258" + " 4499 ");
}
var i = 0;
gc.onclick = function(){
	if(i == 0){
		i = 1;
		var j = Math.floor(Math.random()*one.length);
		shuoshuo(one[j]);		
	}else{
		i = 0;
		draw(" --- ---- ---- ");		
	}
}
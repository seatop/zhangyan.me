function draw(tel){
	var graph = document.getElementById("graph");
	graph.width = graph.width;
	var g = graph.getContext("2d");
    var fx = 125;
    var fy = 10;
	g.lineWidth = 8;
	g.lineCap = "round";
	g.strokeStyle = "#fff";
	g.beginPath();
	g.arc(10+fx,10+fy,10,Math.PI/2,Math.PI,false);
	g.moveTo(fx,fy);
	g.lineTo(fx,10+fy);
	g.moveTo(10+fx,20+fy);
	g.lineTo(40+fx,20+fy);
	g.moveTo(60+fx,20+fy);
	g.lineTo(90+fx,20+fy);	
	g.stroke();

	g.beginPath();
	g.arc(40+fx,30+fy,10,-Math.PI/2,0,false);
	g.stroke();

	g.beginPath();
	g.arc(90+fx,10+fy,10,0,Math.PI/2,false);
	g.moveTo(100+fx,fy);
	g.lineTo(100+fx,10+fy);
	g.moveTo(50+fx,30+fy);
	g.lineTo(50+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(130+fx,10+fy,10,-Math.PI/2,Math.PI,true);
	g.moveTo(130+fx,fy);
	g.lineTo(210+fx,fy);
	g.moveTo(130+fx,25+fy);
	g.lineTo(210+fx,25+fy);
	g.moveTo(220+fx,10+fy);
	g.lineTo(220+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(210+fx,10+fy,10,0,-Math.PI/2,true);
	g.moveTo(120+fx,10+fy);
	g.lineTo(120+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(250+fx,10+fy,10,-Math.PI/2,Math.PI,true);
	g.moveTo(250+fx,fy);
	g.lineTo(330+fx,fy);
	g.moveTo(340+fx,10+fy);
	g.lineTo(340+fx,40+fy);
	g.stroke();

	g.beginPath();
	g.arc(330+fx,10+fy,10,0,-Math.PI/2,true);
	g.moveTo(240+fx,10+fy);
	g.lineTo(240+fx,40+fy);
	g.stroke();

	g.fillStyle = "#fff";	
	g.font = "15px sans-serif";
	g.textAlign = "left";
	g.fillText("淮阴师范学院",380,90+fy);
	g.fillText("学生",443,120+fy);
	g.fillStyle = "#fff";
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
	g.strokeStyle = "#fff";
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

	g.fillStyle = "#fff";	
	g.font = "20px sans-serif";
	g.textAlign = "left";
	g.fillText("zhangyan.me",345,90+fy);
	g.fillStyle = "#fff";
	g.font = "16px sans-serif";
	g.fillText(sha,120,180+fy);	
}
draw(" --- ---- ---- ");
var gc = document.getElementById("graph");
gc.ondblclick = function(){
	draw(" 176" + " 0258" + " 4449 ");
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
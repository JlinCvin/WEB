var x = document.getElementById("tp");
x.addEventListener("click", myFunction);
function myFunction() {
  alert ("你好！");
}

window.onload = function () {
	var months = document.querySelectorAll("#month>div"),
		fTitle = document.querySelector("#festival-title"),
		fContent = document.querySelector("#festival-content");

	var festivalArr = [
		"元旦：1月1日至3日放假三天",
		"春节：2月2日至8日放假7天",
		"妇女节：3月8日妇女节，与我无关",
		"清明节：4月3日至5日放假三天",
		"劳动节：4月30日至5月2日放假三天",
		"端午节：6月4日至6日放假三天",
		"小暑：7月7日小暑，不放假",
		"七夕节：8月6日七夕节，不放假",
		"中秋节：9月10日至12日放假三天",
		"国庆节：10月1日至7日放假7天",
		"立冬：11月8日立冬，不放假",
		"艾滋病日：12日1日<br>废除奴隶制国际日：12月2日"
	];

	months.forEach(function (item, index, arr) {
		months[index].onmouseover = function () {
			var self = this;

			months.forEach(function (item, i) {
				if (index !== i) {
					arr[i].style.cssText = "";
				}else{
					self.style.cssText = "background-color:white;color:#F69;";
				}
			});

			fTitle.innerHTML = index + 1 + "月节日";
			fContent.innerHTML = festivalArr[index];
		}
	});
	var clock = document.querySelector("#clock"),
		timeSpans = clock.querySelectorAll("span");

	function format (num) {
		return num.toString().replace(/^(\d)$/, "0$1");
	}

	function displayClock () {
		var now = new Date(),
			timeArr = [now.getHours(), now.getMinutes(), now.getSeconds()];
		timeArr.forEach(function  (item, index) {
			timeSpans[index].innerHTML = format(timeArr[index]);
		});
	}

	displayClock();
	setInterval(displayClock, 600);	
	var number = document.getElementById("number"),
		num = 0;

	function increaseByOne () {
		number.innerHTML = ++num;
	}
	setInterval(function () {increaseByOne();}, 1000);
}

var sn = [ 42, 41 ], dz = 43, fx = 1, n, ctx = document.getElementById("can").getContext("2d");  
function draw(t, c) {  
	ctx.fillStyle = c;  
	ctx.fillRect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18);  
}  
document.onkeydown = function(e) {  
	fx = sn[1] - sn[0] == (n = [ -1, -20, 1, 20 ][(e || event).keyCode - 37] || fx) ? fx : n  
};  
!function() {  
	sn.unshift(n = sn[0] + fx);  
	if (sn.indexOf(n, 1) > 0 || n<0||n>399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19)  
		return alert("GAME OVER");  
	draw(n, "Lime");  
	if (n == dz) {  
		while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);  
		draw(dz, "Yellow");  
	} else  
		draw(sn.pop(), "Black");  
		setTimeout(arguments.callee, 130);  
}();  

var modal = document.getElementById('myModal');
 
// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
 
// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("close")[0];
 
// 当点击 (x), 关闭弹窗
span.onclick = function() { 
  modal.style.display = "none";
}
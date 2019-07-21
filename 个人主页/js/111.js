window.onload = function  () {
	var clock = document.getElementById("clock"),
		timeSpans = clock.getElementsByTagName("span");
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
	setInterval(displayClock, 500);	
}
/* 独立时间 */

var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


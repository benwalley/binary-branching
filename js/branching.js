var row = 0
var width = 50
var length = 2
var height = 1



function step() {
  	
	window.requestAnimationFrame(slideDown)
	
}

function slideDown(){
	for(var i = 0; i < $(".myDiv").length; i++){
		$(".myDiv")[i].style.height = height + "px"
	}
	
	

	
}



$(window).scroll(function(){
	if(row == 0){
		var $div = $("<div>", {"class": "myDiv", width: width + "vw"});
		$("#main").append($div);
	  	var $div2 = $("<div>", { "class": "myDiv", width: width + "vw"});
	  	$div2[0].style.borderLeft = "3px solid blue"
		$("#main").append($div2);
		window.requestAnimationFrame(step);	
		if(height < 200){
			window.requestAnimationFrame(slideDown)
			height += 1
		}else{
			row = 1	
		}
		
	}
	
})
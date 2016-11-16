var row = 0
var width = 50
var height = 0
var first = false
var sections = 1





function slideDown(){
	// make the divs get taller
	for(var i = 0; i < $(".myDiv").length; i++){
		$(".myDiv")[i].style.height = height + "px"
	}
}



$(window).scroll(function(){
	// for the very first row (since it is different than the rest)
	if(row == 0){
		if(!first){
			// first create two divs
			var $div = $("<div>", {"class": "myDiv", width: width + "vw", height: "0"});
			$("#main").append($div);
		  	var $div2 = $("<div>", { "class": "myDiv", width: width + "vw", height: "0"});
		  	$div2[0].style.borderLeft = "3px solid blue"
			$("#main").append($div2);
			first = true
		}else{
			// untill it is 200 height
			if(height < 200){
				window.requestAnimationFrame(slideDown)
				height += 10
			}else{
				// then on to the next row
				row = 1	
			}
		}		
	}
	// IF IT IS NOT THE FIRST ROW
	else{
		for(var i = 0; i < sections; i++){
			// MAKE A DIV FOR EACH DOUBLE BRANCH
			var $row = $("<div>", {"class": "row", width: 100/sections + "%", height: "20px"});
			$("#main").append($row);
			// INSIDE EACH ONE, MAKE A DIV WITH TWO SIDE DIVS
			var $left = $("<div>", { "class": "side", width: "25%", height: "100%"});
			$left.appendTo($(".row")[i]);

			var $middle = $("<div>", { "class": "middle", width: "50%", height: "100%"});
			$middle.appendTo($(".row")[i]);

			var $right = $("<div>", { "class": "side", width: "25%", height: "100%"});
			$right.appendTo($(".row")[i]);
			console.log("made stuff")
		}		
	}	
})

function slideWide(i){

}
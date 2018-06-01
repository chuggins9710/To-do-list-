// Check Off Specific Todos by Clicking
//$("li").click(function(){
		//if li is gray
		//if($(this).css("color") === "rgb(128, 128, 128)"){
			//turn it black
			//$(this).css({
				//color: "black",
				//textDecoration: "none"
			//});
		//}
		//else
		//else{
			//turn it gray
			//$(this).css({
			//color: "rgb(128, 128, 128)",
			//textDecoration: "line-through"
			//});
		//}
	//});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//erase text
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});
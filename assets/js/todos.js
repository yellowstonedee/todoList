//Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete")
});


//Delete todos by clicking X (trash icon)
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//Create New Todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>");
		//clear input
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
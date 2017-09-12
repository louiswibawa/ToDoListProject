// Check off specific todos by clicking
$("ul").on("click", "li", function(){ // the reason why it's ul is b/c the ul exist when the page loads, but new lis are dynamically
									  // added. Ultimately, when the new lis are clicked, it will work.
	$(this).toggleClass("completed");
	// if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	// turn it to black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});

	// }
	// // else
	// else{
	// 	// turn to gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
});

// Click on 'X' to delete Todo
$("ul").on("click", "span", function(event){ // same analogy as above
	$(this).parent().fadeOut(500, function(){ // the 'this' here refers to the span
		$(this).remove(); // the 'this' here refers to the li
	});
	event.stopPropagation(); // only the span click listener is called
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ // check if the key entered is an 'Enter'
		var todoText = $(this).val(); // console.logs the input
		$(this).val(""); // clear input after pressing enter
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil-square-o").on("click", function(){
	$("input[type='text']").fadeToggle(); // fadeOut if faded out, fadeIn if faded in
});
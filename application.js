$(document).ready(function() {

	$("#submit").on('click', function(e){
		e.preventDefault();
		$("#itemscontainer").append(
			$("#add").val();
		);
	});

});
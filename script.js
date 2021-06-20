(function($){
$(document).ready(function(){
	var day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][(new Date()).getDay()];
	$(".day").html("sunday");
});
})(jQuery);

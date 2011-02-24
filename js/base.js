$(function() {
	//el - element being hidden
	//targ - element being displayed
	function changeTextSize(el,targ,classOne,classTwo){
		$("#storyBody").toggleClass(''+classOne+' '+classTwo+'');		
		$(el).css('display','none');
		$(targ).css('display','inline');
	};
	
	$("#largerBody").click(function() {
		changeTextSize($(this),$("#smallerBody"),'storyBodyLarger','storyBodySmaller');
	});
	$("#smallerBody").click(function() {
		changeTextSize($(this),$("#largerBody"),'storyBodyLarger','storyBodySmaller');
	});
});	
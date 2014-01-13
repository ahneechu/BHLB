$(function() {
	$('#topnav a').click(function() {
		var targetId = $(this).attr('href');
		console.log(targetId);

		var target = $(targetId);
		console.log (target);

		var topDistance = target.position().top;
		console.log (topDistance);

		$('body').animate({ scrollTop : topDistance });
		return false;

	});
	



});
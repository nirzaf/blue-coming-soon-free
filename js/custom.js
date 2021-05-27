/*
Author: WebThemez
Author URL: http://webthemez.com 
*/
$( function() { 
 
	$(".player").mb_YTPlayer();
	
	var endDate = "December  27, 2017 15:03:25";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>DAYS</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>HOURS</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>MINUTES</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>SECONDS</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});

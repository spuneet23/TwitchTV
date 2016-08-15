 

$(function()
	{ 
	 // Cache the window object
	 var $window= $(window);
	 //Parallax background effect
	 $('section[data-type="background"]').each(function(){
	 	var $bgobj= $(this); //assigning the object
	 	$(window).scroll(function (){
	 		//scroll the background at var speed
	 		// yPos is a negative value because we are scrolling it up

	 		var yPos=-($window.scrollTop() / $bgobj.data('speed'));

	 		// Put together our final background position
	 		var coords='50%'+yPos+'px';
	 		// Move the background
	 		$bgobj.css({backgroundPosition: coords});
	 	}); // end window scroll
	 });

	})  ;


//NAVBAR SHRINKS
 

   $(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
 

 

 // IMAGE SLIDES -->


   $(window).scroll(function(){
      if ($(document).scrollTop() > 300) {
        
          $('#slide').addClass('move');
           
      } 
  });
          $('#locaudit2').hide();
           $('#locaudit3').hide();
             $('#locaudit4').hide();
        $(window).scroll(function(){
      if ($(document).scrollTop() > 350) {
         $('#locaudit2').hide();
        $('#locaudit2').fadeIn(2000);
      
      } 
  });

$(window).scroll(function(){
      if ($(document).scrollTop() > 370) {
         $('#locaudit3').hide();
        $('#locaudit3').fadeIn(4000);
          
      } 
  });

$(window).scroll(function(){
      if ($(document).scrollTop() > 370) {
         $('#locaudit4').hide();
        $('#locaudit4').fadeIn(5000);
          
      } 
  });












// Go to up-->
 

   $(window).scroll(function() {
  if ($(document).scrollTop() > 1000) {
    $('#gotoup').css('display','block');
  } else {
   $('#gotoup').css('display','none');
  }
});

   $('#gotoup').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    
  });


// SLIDE DOWN -->
 
 $("#nav_home").click(function() {
    $('html, body').animate({
        scrollTop:0
    }, 1000);
});

 $("#nav_about").click(function() {
    $('html, body').animate({
        scrollTop:630
    }, 1000);
});

 $("#nav_products").click(function() {
    $('html, body').animate({
        scrollTop:1100
    }, 1000);
});

 $("#nav_team").click(function() {
    $('html, body').animate({
        scrollTop:3500
    }, 1000);
});

 $("#nav_contact").click(function() {
    $('html, body').animate({
        scrollTop:4200
    }, 1000);
});

 $("#nav_join").click(function() {
    $('html, body').animate({
        scrollTop:4200
    }, 1000);
});
 




 $(document).ready(function() {

 $('#singapore').click(function(){

   $('#address').html(' <h5>Singapore</h5><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;Address: &nbsp;7, Chia Ping Road, Singapore 619972 (Singapore)</p><span class=" glyphicon glyphicon-phone"></span>&nbsp;Mobile: &nbsp;+65 856551606</p><p><span class=" glyphicon glyphicon-mail"></span>&nbsp;Email:&nbsp; info@locad.net</p>');
 });

 $('#india').click(function(){
   $('#address').html(' <h5>India</h5><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;Address: &nbsp;3rd Floor, N-116 Panchsheel Park, New Delhi-110017 (India)</p><p><span class=" glyphicon glyphicon-phone"></span>&nbsp;Tel: &nbsp;+91-11-26498187,88,89</p><p><span class=" glyphicon glyphicon-phone"></span>&nbsp;Mobile: &nbsp;+91 9810174445</p><p><span class=" glyphicon glyphicon-mail"></span>&nbsp;Email:&nbsp; info@locad.net</p>');
 });

$('#russia').click(function(){
   $('#address').html(' <h5>Russia</h5><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;Address: &nbsp;61 Berdskoe shosse, Novosibirsk, Russia 630025 (Russia)</p><span class=" glyphicon glyphicon-phone"></span>&nbsp;Mobile: &nbsp;+79 139861304</p><p><span class=" glyphicon glyphicon-mail"></span>&nbsp;Email:&nbsp; info@locad.net</p>');
 });

$('#hong').click(function(){
   $('#address').html(' <h5>Hong Kong</h5><p><span class="glyphicon glyphicon-map-marker"></span>&nbsp;Address: &nbsp;China Oriental Enterprises Company Ltd.<br>3/F Jonsim Place, 228 Queen’s Road East, Wanchai, Hong Kong (Hong Kong)</p><span class=" glyphicon glyphicon-phone"></span>&nbsp;Mobile: &nbsp;+65 856551606</p><p><span class=" glyphicon glyphicon-mail"></span>&nbsp;Email:&nbsp; info@locad.net</p>');
 });

});





// FADE IN DIV -->

$("#logo").hide();
$("#big_data").hide();
$("#cross_channel").hide();
$("#analytics").hide();
$("#privacy").hide();
$("#accuracy").hide();
$("#loyalty").hide();
$("#reach").hide();
$("#relevance").hide();

$(window).scroll(function(){
      if ($(document).scrollTop() > 2500) {
    $("#logo").fadeIn(2000);

}
});

$(window).scroll(function(){
      if ($(document).scrollTop() > 2500) {
    $("#big_data").fadeIn(1000);
    $("#accuracy").fadeIn(1000);
}
});

$(window).scroll(function(){
      if ($(document).scrollTop() > 2600) {
    $("#cross_channel").fadeIn(1000);
    $("#loyalty").fadeIn(1000);
}
});

$(window).scroll(function(){
      if ($(document).scrollTop() > 2700) {
    $("#analytics").fadeIn(1000);
    $("#reach").fadeIn(1000);
}
});

$(window).scroll(function(){
      if ($(document).scrollTop() > 2800) {
    $("#privacy").fadeIn(1000);
    $("#relevance").fadeIn(1000);
}
});







$('#brands').hide();
$('#ooh').hide();
$('#agencies').hide();
$('#banking').hide();
$('#event').hide();
$('#f').hide();
$('#retail').hide();
$('#travel').hide();

$(window).scroll(function(){
      if ($(document).scrollTop() > 1750) {
    $("#brands").fadeIn(1000); 
  }
 });

$(window).scroll(function(){
      if ($(document).scrollTop() > 1800) {
    $("#ooh").fadeIn(1000); 
  }
 });

$(window).scroll(function(){
      if ($(document).scrollTop() > 1850) {
    $("#agencies").fadeIn(1000); 
  }
 });

$(window).scroll(function(){
      if ($(document).scrollTop() > 1900) {
    $("#banking").fadeIn(1000); 
  }
 });

$(window).scroll(function(){
      if ($(document).scrollTop() > 1950) {
    $("#event").fadeIn(1000); 
  }
 });

$(window).scroll(function(){
      if ($(document).scrollTop() > 2000) {
    $("#f").fadeIn(1000); 
  }
 });

$(window).scroll(function(){
      if ($(document).scrollTop() > 2050) {
    $("#retail").fadeIn(1000); 
  }
 });

$(window).scroll(function(){
      if ($(document).scrollTop() > 2100) {
    $("#travel").fadeIn(1000); 
  }
 });


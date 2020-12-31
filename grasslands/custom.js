
jQuery(document).ready(function($) {
   
   /* home page header */
   $("#home-meu").click(function(){
      $(".saeon-header").removeClass("sn-noscroll");
   });

   /* search */
	$('body').on('submit', '#sasdisearch', function(e){
		e.preventDefault();
		
		var searchterm = $('.sasdisearch').val();
      var searchurl = 'http://www.sasdi.net/search.aspx?noframe=true&anytext='
      //var searchurl = 'https://catalogue.saeon.ac.za/records?terms=' 
		console.log(searchurl + searchterm);
		window.open(searchurl + searchterm,'_blank');
   });
   
   /* Shorten text short-text */
   if($(".short-text").length){
      $(".saeon-more").replaceWith('<div class="saeon-more">... Read More</div>');
   };
   $("body").on("click", ".saeon-more", function(){
      var saeonparent = $(this).closest(".short-text");
      var saeonhide = $(saeonparent).find(".saeon-more-count");
      $(saeonhide).addClass("saeon-hide-count").removeClass("saeon-more-count");
      $(this).replaceWith('<div class="saeon-less">... Read Less</div>');
  });
  $("body").on("click", ".saeon-less", function(){
      var saeonparent = $(this).closest(".short-text");
      var saeonhide = $(saeonparent).find(".saeon-hide-count");
      $(saeonhide).removeClass("saeon-hide-count").addClass("saeon-more-count");
      $(this).replaceWith('<div class="saeon-more">... Read More</div>');
  });
});

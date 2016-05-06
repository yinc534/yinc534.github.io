$(".random").each(function() {
  $(this).css("top", Math.floor(Math.random()*$(window).height()));
  
$(this).css("left",Math.floor(Math.random()*$(window).width()));
});
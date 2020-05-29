$(document).ready(function(){
	console.log("abcddd");
  $(".myImageClass").mouseover(function(){
	  console.log("abcddd");
	 $(".hiddenClass").css("visibility", "visible");
  });
  $(".myImageClass").mouseleave(function(){
	  console.log("abcddd");
	 $(".hiddenClass").css("visibility", "hidden");
  });
});
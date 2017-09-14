$(function(){

	"use strict";

	// extra information about each demo
	var demos = ["ybdb", "bikebinder", "bikeshed", "freehub", "biketree", "bikekitchenpos", "signinapp", "vtracklery", "vtracklery2", "bike-database", "workstand"];
	
	$.each(demos, function(key, value) { 
		show_more($('#' + value), $('#' + value + '_button'));
	} );

	function show_more(demo,demo_button) {
	  	$(demo).hide();
	  	var c=0;
	  	$(demo_button).click(function(e){
	  		e.preventDefault();
		  	if (c == 0) {
			$(demo).slideDown();
				$(this).attr("value","Show Less");
				c++;
		  	} else {
		   	$(demo).slideUp();
		   	$(this).attr("value","Show More");
		    	c--;
		    }
	  	 } );  
  	 }
  	 
 });
  	 
  	 

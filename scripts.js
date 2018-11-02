"use strict"

$( document ).ready(function() {
  
  
  //event handler for submit button
  $("[type=submit]").on("click", function(ev){
    var flag=true;  //flag for errors

    var $email = $("#emailerror"); //save error element for efficency
    
    if($("#email").val().length>0){
      $email.addClass("noerror"); //add class that hides error message
      $email.removeClass("error"); //remove class that shows error, if present
      flag=false; //set flag to stop form submission
    }else{
      $email.addClass("error"); //add class to show error
      $email.removeClass("noerror"); //remove class to hide error
    }
    
    //save movie drop down for efficency
    var $movie = $("#movie");
   
    if($movie.val()==0){
      $movie.next("span").remove(); //remove the element if it's already there
      
      //add new error element
      $("<span class='error'>You must choose a movie</span>").insertAfter($movie);
      flag = true; //set flag to stop form submission
    }else{
      $("#movie").next("span").remove(); //remove element when no longer incorrect
    }
    
    //check if an error occured
    if(flag)
      ev.preventDefault(); //stop form submission
	else{
		   
   //prevent Default
    ev.preventDefault();
   //open form dialog
   dialog.dialog( "open" );
	
	}
   });
   
       var dialog= $( "#dialog-confirm" ).dialog({
	  autoOpen: false,
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "submit vote": function() { 
		$("form#voting").submit();
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
   
   
   

});


'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("...Connecting... ");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
		
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject); 
}

function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#0DFFDD");

	var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");

    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>What do you think??</p></div>");
    } else {
    	description.fadeToggle()
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
   }

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}	


/*
	Author: Danilo de Moura Chenchi
	
	Require materialize css
*/

/* Each image have a respective title. So it's a 1-to-1 relation of the two arrays */
var images_array = [
					"You gonna love it HD.png",
					"Quote cite.png",
					"hello.png",
					"Lisp lists of lists.png",
					];
var titles_array = [
					"You gonna love IT",
					"Quote someone today",
					"Hello World!",
					"Lisp lists of lists of...",
					];

/* Add all the images registered in the array to the gallery */
function initGallery() {
	var i = 0;
	for (i = 0; i < images_array.length; i++) {
		addThumbnail( images_array[i], titles_array[i]);
	}
	
	// Reset materialboxed
	$('.materialboxed').materialbox();
}

/*
Thumbnail
<div class="col s4">
	<div class="card small">
		<div class="card-image">
			<img class="materialboxed" data-caption="title" src="path/image.ext">
		</div>
		<div class="card-content">
			<span class="card-title">title</span>
		</div>
	</div>
</div>
*/
function addThumbnail(image_name, title) {
// Initialize card divs
	var column = $("<div></div>");
	var card_small = $("<div></div>");
	var card_image = $("<div></div>");
	var card_content = $("<div></div>");

// Add classes to style the card
	column.addClass("col s12 m6 l4");
	card_small.addClass("card");
	card_image.addClass("card-image");
	card_content.addClass("card-content");

// Add image
	var thumb_image = $("<img>");
	thumb_image.addClass("materialboxed");
	thumb_image.attr("data-caption", title);
	thumb_image.attr("src", "imgs/" + image_name);
	
// Add title
	var thumb_title = $("<span></span>");
	thumb_title.addClass("card-title");
	thumb_title.text(title);
	
// Structure the card html tree bottom-up
	card_image.append(thumb_image);
	card_image.append(thumb_title);
	card_small.append(card_image);
	column.append(card_small);
	
	$("#thumb-galley").append(column);
}

$('a[href^="#"]').on('click', function(event) {
	var target = $( $(this).attr('href') );
	
	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, {duration: 400, queue: false, easing: 'easeOutCubic'});
	}
	console.log($('body').scrollTop());
});

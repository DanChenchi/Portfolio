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
function addThumbnail(image_path, title) {
// Initialize card divs
	var column = $("<div></div>");
	var card_small = $("<div></div>");
	var card_image = $("<div></div>");
	var card_content = $("<div></div>");

// Add classes to style the card
	column.addClass("col s4");
	card_small.addClass("card small");
	card_image.addClass("card-image");
	card_content.addClass("card-content");

// Add image
	var thumb_image = $("<img>");
	thumb_image.addClass("materialboxed");
	thumb_image.attr("data-caption", title);
	thumb_image.attr("src", image_path);
	
	card_image.append(thumb_image);
	
// Add content
	var thumb_content = $("<span></span>");
	thumb_content.addClass("card-title");
	thumb_content.text(title);
	
	card_image.append(thumb_content);

// Structure the card html tree
	card_small.append(card_image);
	card_small.append(card_content);
	column.append(card_small);
	
	$("#thumb-galley").append(column);

// Reset materialboxed to amplify the thumbnails
	$('.materialboxed').materialbox();
}
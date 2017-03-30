/*
	Author: Danilo de Moura Chenchi
	
	Require materialize css
*/

/* Each image have a respective title. So it's a 1-to-1 relation of the two arrays */
var images_array = ["lotr wallpaper.jpg",
					"You gonna love it HD.png",
					"lotr wallpaper2.jpg",
					"Rogue-One-A-Star-Wars-Story-2016-Wallpaper-03854.jpg",
					"Skyrim.jpg",
					"StormGiant_Gallery_Thumb.jpg"];
var titles_array = ["Battle against the Witchking",
					"You gonna love IT",
					"The Fellowship",
					"Rogue One Death Trooper",
					"Skyrim",
					"Storm King's Thunder"];

/* Add all the images registered in the array to the gallery */
function initGallery() {
	var i = 0;
	for (i = 0; i < images_array.length; i++) {
		addThumbnail( images_array[i], titles_array[i]);
	}
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
	column.addClass("col s4");
	//card_small.addClass("card small");
	card_small.addClass("card");
	card_image.addClass("card-image");
	card_content.addClass("card-content");

// Add image
	var thumb_image = $("<img>");
	thumb_image.addClass("materialboxed");
	thumb_image.attr("data-caption", title);
	thumb_image.attr("src", "imgs/" + image_name);
	
	card_image.append(thumb_image);
	
// Add content
	var thumb_content = $("<span></span>");
	thumb_content.addClass("card-title");
	thumb_content.text(title);
	
	card_image.append(thumb_content);

// Structure the card html tree
	card_small.append(card_image);
	column.append(card_small);
	
	$("#thumb-galley").append(column);

// Reset materialboxed to amplify the thumbnails
	$('.materialboxed').materialbox();
}

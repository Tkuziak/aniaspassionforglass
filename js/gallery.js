
var modal;

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function enlargePicture(imageId) {

	var img = document.getElementById(imageId);
	// Get the modal
	modal = document.getElementById('myModal');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function closeModal (){
	modal.style.display = "none";
}


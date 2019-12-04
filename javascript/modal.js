function afficheModal(divModal) {

	/*var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];*/

 /*
	 * Ici comme dans document.getElementsByClassName => tous les éléments de classe "toto" => tableau de X
	 * on va chercher dans l'élément modal (DIV) tous les éléments de classe "toto" => tableau de 1 qui comence à 0
	 */
	let closeButton = divModal.getElementsByClassName("close")[0];
	
	// When the user clicks on <span> (x), close the modal
	closeButton.onclick = function() {
		divModal.style.display = "none";
	}
	
	
	// When the user clicks on the button, open the modal
//	btn.onclick = function() {
	divModal.style.display = "block";
//	}

	

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == divModal) {
		  divModal.style.display = "none";
	  }
	} 
}


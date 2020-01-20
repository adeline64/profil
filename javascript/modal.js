var dataProfil;

//au chargement de la page : recup des données de strapi
// Fonction pour appeler les données du serveur Strapi
function getDataProfil() {
	fetch('http://localhost:1337/apprenants/1')
		.then(resp => resp.json())
		.then(data => {
			dataProfil = data;
			console.log(dataProfil);

			let insertNom = document.getElementById("lacabanne");
			insertNom.textContent = dataProfil.nom;
			// console.log(insertNom);

			let insertPrenom = document.getElementById("adeline");
			insertPrenom.textContent = dataProfil.prenom;
			// console.log(insertPrenom);

			// console.log(insertPrenom, insertNom);
		})
}
// Déclencher la fonction pour avoir les données du serveur
getDataProfil();




function afficheModal(data) {

	//competence metier
	let insertMaquette = document.getElementById("maq");
	insertMaquette.textContent = data.intitule;
	// console.log(insertMaquette);

	let myModal = document.getElementById('myModal');

	console.log(data);
	// 	alert(check[0].value);
	// alert(check[0].name);
	// alert(check[0].id);

	if (data.level.Comprendre >= 1) {
		document.getElementById('test1').checked = true;
	}
	else {
		document.getElementById('test1').checked = false;
	}

	if (data.level.Comprendre >= 2) {
		document.getElementById('test2').checked = true;

	} else {
		document.getElementById('test2').checked = false;
	}

	if (data.level.Comprendre >= 3) {
		document.getElementById('test3').checked = true;

	} else {
		document.getElementById('test3').checked = false;
	}

	if (data.level.duppliquer >= 1) {
		document.getElementById('test4').checked = true;
	} else {
		document.getElementById('test4').checked = false;
	}

	if (data.level.duppliquer >= 2) {
		document.getElementById('test5').checked = true;

	} else {
		document.getElementById('test5').checked = false;
	}

	if (data.level.duppliquer >= 3) {
		document.getElementById('test6').checked = true;

	} else {
		document.getElementById('test6').checked = false;
	}

	if (data.level.analyser >= 1) {
		document.getElementById('test7').checked = true;
	} else {
		document.getElementById('test7').checked = false;
	}

	if (data.level.analyser >= 2) {
		document.getElementById('test8').checked = true;

	} else {
		document.getElementById('test8').checked = false;
	}

	if (data.level.analyser >= 3) {
		document.getElementById('test9').checked = true;

	} else {
		document.getElementById('test9').checked = false;
	}

	if (data.level.evaluer >= 1) {
		document.getElementById('test10').checked = true;
	} else {
		document.getElementById('test10').checked = false;
	}

	if (data.level.evaluer >= 2) {
		document.getElementById('test11').checked = true;

	} else {
		document.getElementById('test11').checked = false;
	}

	if (data.level.evaluer >= 3) {
		document.getElementById('test12').checked = true;

	} else {
		document.getElementById('test12').checked = false;
	}

	if (data.level.concevoir >= 1) {
		document.getElementById('test13').checked = true;
	} else {
		document.getElementById('test13').checked = false;
	}

	if (data.level.concevoir >= 2) {
		document.getElementById('test14').checked = true;

	} else {
		document.getElementById('test14').checked = false;
	}

	if (data.level.concevoir >= 3) {
		document.getElementById('test15').checked = true;

	} else {
		document.getElementById('test15').checked = false;
	}

	if (data.level.inventer >= 1) {
		document.getElementById('test16').checked = true;

	} else {
		document.getElementById('test16').checked = false;
	}


	/*var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];*/

	/*
		* Ici comme dans document.getElementsByClassName => tous les éléments de classe "toto" => tableau de X
		* on va chercher dans l'élément modal (DIV) tous les éléments de classe "toto" => tableau de 1 qui comence à 0
		*/
	let closeButton = myModal.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	closeButton.onclick = function () {
		myModal.style.display = "none";
	}


	// When the user clicks on the button, open the modal
	//	btn.onclick = function() {
	myModal.style.display = "block";
	//	}



	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == myModal) {
			myModal.style.display = "none";
		}
	}
}

function affichemodal2(data) {
	//competence metier
	let insert = document.getElementById("compHu");
	insert.textContent = data.qualite;
	// console.log(insert);


	let competenceHumaines = document.getElementById('competenceHumaines');


	console.log(data);
	// 	alert(check[0].value);
	// alert(check[0].name);
	// alert(check[0].id);
	alert('toto')
	if (dataProfil.competence_humaines[data].etat >= 1) {
		console.log(dataProfil);
		
		document.getElementById('test17').checked = true;
		console.log(dataProfil.competence_humaines[data].etat);
		
		
		
	}
	else {
		document.getElementById('test17').checked = false;
	}

	if (idataProfil.competence_humaines[data].etat >= 2) {
		document.getElementById('test18').checked = true;
	}
	else {
		document.getElementById('test18').checked = false;
	}

	if (dataProfil.competence_humaines[data].etat >= 3) {
		document.getElementById('test19').checked = true;
	}
	else {
		document.getElementById('test19').checked = false;
	}

	if (dataProfil.competence_humaines[data].etat >= 4) {
		document.getElementById('test20').checked = true;
	}
	else {
		document.getElementById('test20').checked = false;
	}

	if (dataProfil.competence_humaines[data].etat >= 5) {
		document.getElementById('test21').checked = true;
	}
	else {
		document.getElementById('test21').checked = false;
	}

	if (dataProfil.competence_humaines[data].etat >= 6) {
		document.getElementById('test22').checked = true;
	}
	else {
		document.getElementById('test22').checked = false;
	}
	if (dataProfil.competence_humaines[data].etat >= 7) {
		document.getElementById('test23').checked = true;
	}
	else {
		document.getElementById('test23').checked = false;
	}

	/*var modal = document.getElementById("competenceHumaines");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];*/

	/*
		* Ici comme dans document.getElementsByClassName => tous les éléments de classe "toto" => tableau de X
		* on va chercher dans l'élément modal (DIV) tous les éléments de classe "toto" => tableau de 1 qui comence à 0
		*/
		let closeButton = competenceHumaines.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		closeButton.onclick = function () {
			competenceHumaines.style.display = "none";
		}
	
	
		// When the user clicks on the button, open the modal
		//	btn.onclick = function() {
			competenceHumaines.style.display = "block";
		//	}
	
	
	
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function (event) {
			if (event.target == competenceHumaines) {
				competenceHumaines.style.display = "none";
			}
		}




}
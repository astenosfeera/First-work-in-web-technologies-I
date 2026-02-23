
	var formReference = document.getElementById("form");
	formReference.addEventListener("submit", function(event) { // call back funkcija (atzvana funkcija, kad notiek notikums)
		// Vispirms mēs validējam obligātos laukus
		var nameFieldReference = document.getElementById("name");

		// === ir stingrā vienādība, nozīme ka patiešām ir jābūt vienādam, 
		// == var notikt automātiskā tipu pārveide, piem. "1" == 1 ir true (javascript jocīgās lietas)
		if (nameFieldReference.value === "") { 
			alert("Name is required");
			event.preventDefault(); // ar šo aptur formas nosūtīšanu
		}

		var phoneFieldReference = document.getElementById("phone");

		if (phoneFieldReference.value === "") {
			alert("Phone is required");
			event.preventDefault();
		}

		var messageFieldReference = document.getElementById("message");

		if (messageFieldReference.value === "") {
			alert("Message is required");
			event.preventDefault();
		}

		// Pārbaudam, vai ir ievadīts skaitlis

		var ageFieldReference = document.getElementById("age");

		if (ageFieldReference.value !== "") {
			if (isNaN(ageFieldReference.value)) { // isNaN - is not a number
				alert("Age must be a number");
				event.preventDefault();
			}
		}

		// Pārbaudam, vai ir ievadīts telefona numurs

		if (phoneFieldReference.value !== "") {
			if (isNaN(phoneFieldReference.value)) {
				alert("Phone must be a number");
				event.preventDefault();
			}
		}

		// No prasībām:
		// Data range or format validation
		// (for instance, if the number entered in ”month” field is 
		// between 1  and 12; or if the value in the salary field is positive). 

		// Pārbaudam, vai vecums ir starp 0 un 120

		if (ageFieldReference.value !== "") {
			if (ageFieldReference.value < 1 || ageFieldReference.value > 120) {
				alert("Age must be between 1 and 120");
				event.preventDefault();
			}
		}

		// Pārbaudam vai telefona numuram ir tieši 8 cipari

		if (phoneFieldReference.value !== "") {
			if (phoneFieldReference.value.length !== 8) {
				alert("Phone must be 8 digits long");
				event.preventDefault();
			}
		}
	});

	// DOM-a manipulācijas (dokumenta objektu modela manipulācijas)

	var scaryHeadingReference = document.getElementById("scaryHeading");
	scaryHeadingReference.addEventListener("click", function() {
		var tableReference = document.getElementById("table");
		// ja ir redzams, mēs paslēpjam
		// ja nav redzams, mēs pārādam
		if (tableReference.style.display === "none") { // CSS izmaiņa ar javascript
			tableReference.style.display = "table"; // table ir īpašais display tips priekš tabulām
		} else {
			tableReference.style.display = "none";
		}
	});

	// HTML ievietošana ar javascriptu

	var wwwReference = document.getElementById("www");
	wwwReference.addEventListener("click", function() {
		// Ievietojam jaunu elementu
		var newParagraph = document.createElement("p"); // jauns <p> elements, kurš nav nekur ievietots
		// jaunā elementa saturs:
		newParagraph.innerHTML = "The <a href='https://en.wikipedia.org/wiki/World_Wide_Web'>World Wide Web</a> is awesome";
		document.body.appendChild(newParagraph); // ievietojam
	});

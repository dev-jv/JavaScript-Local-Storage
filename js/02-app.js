//# localStorage
//          > Guardar [Set]:
//-----------------------------------------------

	// 1era Forma:
	localStorage.setItem('Lord1', 'Darky');

	// 2da Forma:
	localStorage.Lord2 = 'Spock';	

//          > Recuperar [Get]:
//-----------------------------------------------

	// 1era Forma:
	const verLord1 = localStorage.getItem('Lord1')
	console.log(verLord1)

	// 2da Forma:
	verLord2 = localStorage.Lord2;
	console.log(verLord2)

//          > Eliminar [Remove]:
//-----------------------------------------------

	//localStorage.removeItem(Lord1)


//          > Vaciar Storage [clear]:
//-----------------------------------------------

	//localStorage.clear()

//-----------------------------------------------------------------------




//# sessionStorage
//          > Guardar [Set]:
//-----------------------------------------------

	// 1era Forma:
	sessionStorage.setItem('Lord1', 'Darky');

	// 2da Forma:
	sessionStorage.Lord2 = 'Spock';	

//          > Recuperar [Get]:
//-----------------------------------------------

	// 1era Forma:
	const verLord1 = sessionStorage.getItem('Lord1')
	console.log(verLord1)

	// 2da Forma:
	verLord2 = sessionStorage.Lord2;
	console.log(verLord2)

//          > Eliminar [Remove]:
//-----------------------------------------------

	//sessionStorage.removeItem('Lord1')


//          > Vaciar Storage [clear]:
//-----------------------------------------------

	//sessionStorage.clear()
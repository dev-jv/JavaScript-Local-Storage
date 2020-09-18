

//          > Objeto[Set]:
//-----------------------------------------------

	const producto = {
		nombre : "Monitor 24 Pulgadas",
		precio: 300,
	}

	const productoString = JSON.stringify(producto); // Convertimos a String

// console.log(productoString)
// console.log(typeof productoString) // Comprobamos

	localStorage.setItem('producto', productoString) // Guardamos

//          > Array[Set]:
//-----------------------------------------------

	const meses = ['Enero', 'Febrero', 'Marzo']

	const mesesString = JSON.stringify(meses); // Convertimos a String
	localStorage.setItem('meses', mesesString) // Guardamos




//          > Objeto[Get]:
//-----------------------------------------------

	const productoJSON = localStorage.getItem('producto');
	console.log(JSON.parse(productoJSON));

//          > Array[Get]:
//-----------------------------------------------

	const mesesJSON = localStorage.getItem('meses');
	console.log(JSON.parse(mesesJSON));






// //          > Objeto[push]:
// //-----------------------------------------------

	//Prox... :)






//          > Array[push]:
// -----------------------------------------------

	const mesesArray = JSON.parse( localStorage.getItem('meses'));
	console.log(mesesArray);

	mesesArray.push('Nuevo Mes');
	console.log(mesesArray);

	localStorage.setItem('meses', JSON.stringify(mesesArray));

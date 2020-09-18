
//          > Verificar:
//-----------------------------------------------
	if (typeof(Storage) !== 'undefined') {
		// Código cuando Storage es compatible
		console.log('Sirve')
	} else {
		// Código cuando Storage NO es compatible
		console.log('No sirve')
	  }
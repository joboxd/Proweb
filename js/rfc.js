	function valida(campo){
			var bRet = false;
			if (campo.value == "")
				alert("Faltan datos");
			else
				if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
					alert("No tiene formato de RFC");
				else
					bRet = true;
			return bRet;

		}
		function generarfc(nombre, appaterno, apmaterno, fecha){
			var rfc="";
			
			rfc=appaterno.value.substring(0,2)
			+apmaterno.value.substring(0,1)
			+nombre.value.substring(0,1)
			+fecha.value.substring(2,4)
			+fecha.value.substring(5,7)
			+fecha.value.substring(8,10)+"XXX";
			//var x = new String(rfc.value);
			//x.toUpperCase();
			//ya intente parsear el valor de rfc a string e incluso
			//el toUppercase para transformarlas a mayusculas, pero aun asi, me deja una letra en minuscuyla
			//pero se obtiene el patron regular del rfc.

			alert(rfc);
		}
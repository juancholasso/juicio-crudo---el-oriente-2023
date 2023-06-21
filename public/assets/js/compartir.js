function validarEmail(valor) {
  var re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
  valor = valor.toLowerCase();
  if (re.exec(valor) ){
   	return true;
  } else {
   return false;
  }
}

function sendCompartir()
{
	var email1 = $('#email1').val();
	var email2 = $('#email2').val();
	var email3 = $('#email3').val();
	var comments = $('#lb_comentarios').val();
	if(validarEmail(email1))
	{
		if(comments != "")
		{
			if(!validarEmail(email2))
				email2 = "";
			if(!validarEmail(email3))
				email3 = "";
			var url = '/site/sendCompartir';	
			$.post(url, {email1:email1,email2:email2,email3:email3,comments:comments}, function(data){
					if(data.success){
						_gaq.push(['_trackEvent', 'Compartir por Email', 'Enviar', 'Envío exitoso']);
						alert('Enviado con exito');
                    }
					else if(!data.success)
					{
						alert('Error al enviar.');
					}
			}, 'json');
			
		}else{
			alert('Debe ingresar un mensaje en comentarios.');
		}
	}else{
		alert('El email debe ser valido. ' + email1);
	}
}

function openCompartir(op)
{
	if(op == 1)
	{
		$('#lb_comentarios').val('Quiero compartir este link ' + document.location.href);
	}else{
		$('#lb_comentarios').val('Quiero compartir este link ' + document.location.href);
	}
	$('#open_lightbox').click();
}

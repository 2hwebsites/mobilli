// Animação do título da sessão Projetos da Home
$(document).ready(function() {
    "use strict";
	
    $(window).scroll( function(){
		// Tipos de animação de acordo com a área da Home
		var animacaoTitProj = "animated fadeInRight";
		
		// Posição de cima e de baixo da tela
		var bottomJanela = $(window).scrollTop() + $(window).height();
		
		var tamTitProj = $("#titulo-projetos").outerHeight();
		var topTitProj = $("#titulo-projetos").offset().top;
	
		// Posição que inicia a animação.
		// Scroll de cima para baixo, inicia 30% após o topo do objeto
		var initTitProj = topTitProj + (tamTitProj * 20 / 100);
		
		
		if(bottomJanela < topTitProj){
			$("#titulo-projetos").removeClass(animacaoTitProj);
		} else{
			if(bottomJanela > initTitProj){
				$("#titulo-projetos").addClass(animacaoTitProj);
			}
		}
	});
});

// Animação dos projetos da sessão Projetos da Home
$(document).ready(function() {
    "use strict";
	//$("#projetos-home1").css({ "opacity": + "0" });
//	$("#projetos-home2").css({ "opacity": + "0" });
	//$("#projetos-home3").css({ "opacity": + "0" });
	
    $(window).scroll( function(){
		var animacao = "animated fadeInUp";
		
		var topTitProj = $("#titulo-projetos").offset().top;
		var tamSesProj = $("#projetos").offset().top + ($("#projetos").outerHeight() / 2);

		var initListaProj = topTitProj + ($("#titulo-projetos").outerHeight() * 20 / 100) - $(window).height();

		if($(window).scrollTop() > initListaProj){
			if($(window).scrollTop() > tamSesProj){
				$("#projetos-home1").css({ "opacity":+"1" });
				$("#projetos-home2").css({ "opacity":+"1" });
				$("#projetos-home3").css({ "opacity":+"1" });
			} else{
				setTimeout(function() { 		
					$("#projetos-home1").css({ "opacity":+"1" });
					$("#projetos-home1").addClass(animacao);
				}, 200);

				setTimeout(function() { 
					$("#projetos-home2").css({ "opacity":+"1" });
					$("#projetos-home2").addClass(animacao);
				}, 400);

				setTimeout(function() { 		
					$("#projetos-home3").css({ "opacity":+"1" });
					$("#projetos-home3").addClass(animacao);
				}, 600);
			}
		} else{			
			$("#projetos-home1").css({ "opacity": + "0" });
			$("#projetos-home2").css({ "opacity": + "0" });
			$("#projetos-home3").css({ "opacity": + "0" });
			
			$("#projetos-home1").removeClass(animacao);
			$("#projetos-home2").removeClass(animacao);
			$("#projetos-home3").removeClass(animacao);
		}
	});
});
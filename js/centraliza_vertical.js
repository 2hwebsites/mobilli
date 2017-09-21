// JavaScript Document
//function recarregarPagina(){
//	'use strict';
//    location.reload();
//}

//var contador;
//window.onresize = function(){
//	'use strict';
//	
//	var windowWidth = window.innerWidth;
//	
//	if(windowWidth > 991){
//		clearTimeout(contador);
//		contador = setTimeout(centraliza_header, 100);
//	}	
//};

//window.onresize = centraliza_header;
//
//function centraliza_header(){
//	'use strict';
//	
//	// Seta a imagem de capa com o tamanho da tela
//	$(".masterhead").outerHeight($(window).height());
//	
//	// Obtém largura da tela
//	var windowWidth = window.innerWidth;
//	
//	// Realiza os ajustes apenas se a largura da tela for maior que 991px
//	if(windowWidth > 991){
//		// Centraliza o menu de acordo com a altura da logo
//		var altura_logo = $("#logo").height();
//		var altura_menu = $("#menu").height();
//		var margem_top = (altura_logo - altura_menu) / 2;
//
//		$("#menu").css({ "margin-top": + margem_top + "px" });
//
//		// Centraliza o texto da chamada de acordo com a imagem da chamada
//		var altura_img_chamada = $("#img-chamada").height();
//		var altura_texto_chamada = $("#caption-chamada").height();
//		margem_top = (altura_img_chamada - altura_texto_chamada) / 2;
//		
//		$("#caption-chamada").css({ "margin-top": + margem_top + "px" });
//	}
//}
// Funções para montar o header da página inicial, ajustar responsividade e animar elementos

// Declara as variáveis globais
var altura_janela = $(window).height();

// Chama as funções ao carregar a página
$(document).ready(function() {
    "use strict";
	monta_header();
});

$(window).resize(function(){
	"use strict";
	monta_header();
});
$("button.navbar-toggle").click(function(){
	"use strict";
	monta_header();
});
	
// Monta o header e ajusta a responsividade
function monta_header(){
	'use strict';
	
	$(".navbar").css({ "margin-top":"0px" });
	$("#cabecalho").css({ "margin-bottom":"0px" });
	
	var altura_cabecalho;
	var altura_chamada;
	
	var windowWidth = window.innerWidth;	// Obtém largura da tela
	
	// Realiza os ajustes apenas se a largura da tela for maior que 991px
	if(windowWidth > 991){
		$("#menu").css({"margin-right":"5%"});
		//Inicializa variáveis
		altura_cabecalho = $("#cabecalho").height();	// Obtém o tamanho do cabeçalho
		altura_chamada = $("#chamada").height();	// Obtém altura da chamada
		var margem_bottom_cabecalho = altura_janela - (altura_cabecalho + altura_chamada + 30);
		var altura_menu = $("#menu").height();	// Obtém a altura do menu
		var margem_top_menu = ($("#logo").height() - altura_menu) / 2;	//Determina margini-top do menu
		var altura_texto_chamada = $("#caption-chamada").height();
		var margem_caption_chamada = (altura_chamada - altura_texto_chamada) / 2;
	
		// Determina a altura do header que será igual a altura da tela
		$(".masterhead").outerHeight(altura_janela);
		
		//Determina o margin-bottom do cabeçalho
		$("#cabecalho").css({ "margin-bottom": + margem_bottom_cabecalho + "px" });
		
		// Centraliza verticalmente o menu em relação ao logo
		$(".navbar").css({ "margin-top": + margem_top_menu + "px" });
		
		// Centraliza o texto da chamada de acordo com a imagem da chamada
		$("#caption-chamada").css({ "margin-top": + margem_caption_chamada + "px" });
	} else{
		if(windowWidth > 767){
			var largura_navbar = $(".navbar").width();
			var largura_menu = $("#menu").width();
			var margem_right_menu = (largura_navbar - largura_menu) / 2;
			$("#menu").css({"margin-right": + margem_right_menu + "px"});
		} else{
			$("#menu").css({"margin-right":"0px"});
		}
		//Determina o margin-top do menu
		$(".navbar").css({ "margin-top": + ($("#logo").height() / 3) + "px" });
		
		altura_cabecalho = $("#cabecalho").outerHeight();	// Obtém o tamanho do cabeçalho
		var altura_header = altura_cabecalho + 20;
		
		// Determina a altura do header que será igual a altura da tela
		$(".masterhead").outerHeight(altura_header);
	}
}
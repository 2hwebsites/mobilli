// Funções para montar o header da página inicial, ajustar responsividade e animar elementos

// Declara as variáveis globais
var top_Janela = $(window).scrollTop();
var altura_Janela = $(window).height();
var botttom_Janela = top_Janela + altura_Janela;
var top_tit_ativ_p = $("titulo-atividade").offset().top;
var bp_anima_atividade = top_tit_ativ_p.top + $("titulo-atividade p").height();

// Chama as funções ao carregar a página
$(document).ready(function() {
    "use strict";
	
	monta_header();
	
	if(botttom_Janela > bp_anima_atividade){
		alert("dispara");
	}
});

window.onresize = monta_header;

// Monta o header e ajusta a responsividade
function monta_header(){
	'use strict';
	
	var margem_top_menu;
	
	// Obtém largura da tela
	var windowWidth = window.innerWidth;
	
	// Obtém largura da imagem de capa
	var largura_header = $(".masterhead").width();
	// Determina valor do margem top do cabeçalho
	var margem_top_cabecalho = (largura_header * 1.575) / 100;

	// Determina a margin-top do cabeçalho
	$("#cabecalho").css({ "margin-top": + margem_top_cabecalho + "px" });
	
	// Determina a margem top do menu
	var altura_cabecalho = $("#logo").height();
	var altura_menu = $("#menu").height();
	if(windowWidth > 767){
		
		margem_top_menu = (altura_cabecalho - altura_menu) / 2;
		
	} else{
		margem_top_menu = altura_cabecalho / 2;
	}
	$("#menu").css({ "margin-top": + margem_top_menu + "px" });
	
	// Realiza os ajustes apenas se a largura da tela for maior que 991px
	if(windowWidth > 991){
		// Determina altura máxima do header em 62% da largura
		var altura_max_header = windowWidth * 62 / 100;
		
		var altura_chamada = $("#chamada").height();
		var altura_texto_chamada = $("#caption-chamada").height();
		var margem_caption_chamada = (altura_chamada - altura_texto_chamada) / 2;
		// Calcula e adiciona a margem de baixo do cabeçalho
		var soma_alturas = (margem_top_cabecalho + altura_cabecalho + altura_chamada);
		var margem_bottom_cabecalho = altura_Janela - soma_alturas - 10; // 10px de margem bottom do header
		// Determina altura mínima do header
		var altura_min_header = soma_alturas + 60;
		
		// Seta a imagem de capa com a altura da tela ou a altura máxima ou a altura mínima
		if(altura_Janela < altura_max_header && altura_Janela > altura_min_header){
			$(".masterhead").outerHeight(altura_Janela);
		} else{
			if(altura_Janela > altura_max_header){
				$(".masterhead").outerHeight(altura_max_header);
			} else{
				$(".masterhead").outerHeight(altura_min_header);
			}
		}

		// Centraliza o texto da chamada de acordo com a imagem da chamada
		$("#caption-chamada").css({ "margin-top": + margem_caption_chamada + "px" });
		
		//Determina a margem bottom do cabeçalho
		if(margem_bottom_cabecalho < 50){
			margem_bottom_cabecalho = 50;
		} else if((soma_alturas + margem_bottom_cabecalho + 10) > altura_max_header){
			margem_bottom_cabecalho = altura_max_header - soma_alturas - 10;
		}
		$("#cabecalho").css({ "margin-bottom": + margem_bottom_cabecalho + "px" });
		
		// Ajusta a altura do header caso a altura da tela seja menor que o header
		altura_chamada = (margem_top_cabecalho + altura_cabecalho + 60);
	
	} else{
		// Em tablets e celulares a margem bottom do cabeçalho será igual a margem top
		$("#cabecalho").css({ "margin-bottom": + margem_top_cabecalho + "px" });
		
		// Determina altura do header
		var altura_header = $("#cabecalho").height() + (margem_top_cabecalho * 2);
		$(".masterhead").outerHeight(altura_header);
	}
}
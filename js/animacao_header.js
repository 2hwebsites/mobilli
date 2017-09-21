// Animação do título da sessão Projetos da Home
$(document).ready(function() {
    "use strict";
	$(window).scrollTop(0);
	
	var top_inicial = 0;
	var margem_original =  parseInt($("#cabecalho").css("margin-bottom").substr(0, $("#cabecalho").css("margin-bottom").length-2));
	var margem_minima = Math.round(parseInt($("#cabecalho").css("margin-bottom").substr(0, $("#cabecalho").css("margin-bottom").length-2)) * 30 / 100);
	
	var altura = $("#img-chamada").outerHeight();
	var largura = $("#img-chamada").outerWidth();
	
	var margem_top_header;
	
	
	
    $(window).scroll(function(){
		var topJanela = $(window).scrollTop();
		var bottomJanela = topJanela + $(window).height();
		var margem_bottom_cabecalho;
		var margem_nova;
		var altura_atual;
		var altura_nova;
		var perc;
		var largura_nova;
		var margemTop;
		var alturaCaptionChamada;
		
		var offset_atividade = $("#titulo-atividade p").offset();
		var limite_reducao_header = offset_atividade.top + $("#titulo-atividade p").outerHeight();
		
		if(topJanela > top_inicial){
			// Descendo
			if(bottomJanela < limite_reducao_header){
				$(".masterhead").css({"margin-top": + topJanela + "px"});
				
				margem_bottom_cabecalho = $("#cabecalho").css("margin-bottom");
				margem_bottom_cabecalho = parseInt(margem_bottom_cabecalho.substr(0, margem_bottom_cabecalho.length-2));
				margem_nova = margem_bottom_cabecalho - topJanela;
				
				if(margem_bottom_cabecalho > margem_minima){
					$("#cabecalho").css({"margin-bottom": + margem_nova + "px"});
				} else{
					altura_nova = altura - topJanela;
					perc = altura_nova * 100 / altura;
					largura_nova = largura * perc / 100;
					margemTop = (altura_nova - alturaCaptionChamada) / 2;

					$("#img-chamada").outerHeight(altura_nova);
					$("#img-chamada").outerWidth(largura_nova);
					
					alturaCaptionChamada = $("#caption-chamada").height();
					margemTop = (altura_nova - alturaCaptionChamada) / 2;

					$("#caption-chamada").css({ "margin-top": + margemTop + "px" });
				}
			}
			
			
			
			
		} else{
			// Subindo
			margem_bottom_cabecalho = $("#cabecalho").css("margin-bottom");
			margem_bottom_cabecalho = parseInt(margem_bottom_cabecalho.substr(0, margem_bottom_cabecalho.length-2));
			margem_nova = margem_original - topJanela;
			
			if(margem_bottom_cabecalho < margem_original){
				$("#cabecalho").css({"margin-bottom": + margem_nova + "px"});
			} else{
				altura_atual = $("#img-chamada").outerHeight();
				
				if(altura < altura_atual){
					altura_nova = altura - topJanela;
				}
				
				perc = altura_nova * 100 / altura;
				largura_nova = largura * perc / 100;
				alturaCaptionChamada = $("#caption-chamada").height();
				margemTop = (altura_nova - alturaCaptionChamada) / 2;
			
				$("#img-chamada").outerHeight(altura_nova);
				$("#img-chamada").outerWidth(largura_nova);
			}
		}
		
		//
//		
//		
//		
//		
//		
//		var margem_sobe;
//		margem_top_header = $(".masterhead").css("margin-top");
//		
//		
//			margem_nova = margem_bottom_cabecalho - topJanela;
//
//			 else{
//			if(topJanela < (margem_top_header)){
//				margem_sobe = margem_nova + (margem_nova - topJanela);
//				$("#cabecalho").css({"margin-bottom": + margem_nova + "px"});
//			}
//			var altura_nova = altura - topJanela;
//			var perc = altura_nova * 100 / altura;
//			var largura_nova = largura * perc / 100;
//			
//			var alturaCaptionChamada = $("#caption-chamada").height();
//			var margemTop = (altura_nova - alturaCaptionChamada) / 2;
//			
//			$("#img-chamada").outerHeight(altura_nova);
//			$("#img-chamada").outerWidth(largura_nova);
//		
//			$("#caption-chamada").css({ "margin-top": + margemTop + "px" });
			//alert($(".titulo-chamada").css("font-size"));
			
			//if(topScroll < $(window).scrollTop()){
//				margem_nova = margem_cabecalho + topJanela;
//
//				$("#cabecalho").css({"margin-bottom": + margem_nova + "px"});
//			}
//		}
		
		
		
		top_inicial = topJanela;
	});
});
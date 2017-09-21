<?php
include "connections/conn.php";
	
$sqlProjetos = "SELECT p.id, p.titulo, p.subtitulo, p.thumb, p.url_post FROM posts AS p WHERE p.categoria = '1' AND p.ativo = '1' ORDER BY p.id DESC LIMIT 4";

$projetos = mysqli_query($conn, $sqlProjetos) Or die('Erro ao obter projetos. '.mysqli_error($conn));
	
mysqli_close($conn);
	
$totalProjetos = @mysqli_num_rows($projetos);
	
if($totalProjetos == '0'){
	echo "Não há projetos cadastrados.";
}else{
?>
<section id="projetos" class="container-fluid">
	<div class="row">
		<hgroup id="titulo-projetos" class="col-xs-12 titulo-sessao titulo-sessao-inverse text-center">
			<h2>PROJETOS</h2>
			<h2><strong>REALIZADOS</strong></h2>
		</hgroup>
	</div>	

	<div id="listaProj" class="row">
<?php 
	$cont = 0;
	while($res_projetos = mysqli_fetch_array($projetos)){
		$cont++;
		$id = $res_projetos[0];
		$titulo = $res_projetos[1];
		$subtitulo = $res_projetos[2];
		$thumb = $res_projetos[3];
		$url_post = $res_projetos[4];
?>
		<div id="projetos-home<?php echo $cont; ?>" class="col-sm-6 col-md-4 mt30<?php echo ($cont == 4 ? " hidden-xs hidden-md hidden-lg" : ""); ?>">
			<a href="<?php echo "index.php?&p=nav/single&id=".$id."&url=".$url_post; ?>">
				<div class="thumbnail">
					<img src="<?php echo "upload/projeto/".sprintf("%06d", $id)."/".$thumb; ?>" alt="<?php echo $titulo; ?>">

					<div class="text-center">
						<h5 class="text-uppercase"><?php echo $titulo; ?></h5>
						<p><?php echo $subtitulo; ?></p>
					</div>
				</div>
			</a>
		</div>
<?php } ?>
	</div>
</section>
<?php } ?>
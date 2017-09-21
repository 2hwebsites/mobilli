<?php
include "connections/conn.php";
	
$sqlClientes = "SELECT p.id, p.titulo, p.thumb FROM posts AS p WHERE p.categoria = '2' AND p.ativo = '1' ORDER BY RAND() LIMIT 4";

$clientes = mysqli_query($conn, $sqlClientes) Or die('Erro ao obter clientes. '.mysqli_error($conn));
	
mysqli_close($conn);
	
$totalClientes = @mysqli_num_rows($clientes);
	
if($totalClientes == '0'){
	echo "Não há clientes cadastrados.";
}else{
?>
<section id="clientes" class="container-fluid">
	<div class="row">
		<hgroup class="col-xs-12 text-center titulo-sessao">
			<h2>CLIENTES E</h2>
			<h2><strong>PARCEIROS</strong></h2>
		</hgroup>
	</div>
	
	<div class="row">
<?php 
	$cont = 0;
	while($res_clientes = mysqli_fetch_array($clientes)){
		$cont++;
		$id = $res_clientes[0];
		$titulo = $res_clientes[1];
		$thumb = $res_clientes[2];
?>
		<div class="col-sm-6 col-md-4<?php echo ($cont == 4 ? " hidden-xs hidden-md hidden-lg" : ""); ?>">
			<div class="thumbnail sem-borda">
				<img id="img-clientes" src="<?php echo "upload/cliente/".sprintf("%06d", $id)."/".$thumb; ?>" class="img-circle img-responsive" />

				<div class="caption text-center">
					<h5 class="text-uppercase"><?php echo $titulo; ?></h5>
				</div>
			</div>
		</div>
<?php }?>
	</div>
</section>
<?php } ?>
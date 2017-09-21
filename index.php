<?php session_start();

$p = "";

if(isset($_GET['p'])){
	$p = $_GET['p'];
}

$_SESSION['pagina'] = $p;

require_once("head.php");
	
if(empty($p)){
	include("nav/home.php");
} elseif(substr($p, 0, 4) == 'http' || substr($p, 0, 1) == "/" || substr($p, 0, 1) == "."){
	echo '<br /><font face=arial size=11px><br />
			<b>A página não existe.</b><br />
			Por favor selecione uma página a partir do menu principal.';
} else{
	include("$p.php");
}

require_once("footer.php");
?>
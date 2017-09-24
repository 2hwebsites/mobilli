<!doctype html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Móbilli</title>

	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/header.css">
	<link rel="stylesheet" href="css/footer.css">
	<link rel="stylesheet" href="css/animate.css">

<?php if(empty($_SESSION['pagina']) || $_SESSION['pagina'] == "nav/home"){ ?>
	<link rel="stylesheet" href="css/sessoes.css">	
<?php } else{ ?>
	<link rel="stylesheet" href="css/pages.css">
<?php } ?>

	<script type="text/javascript" src="js/jquery-3.2.0.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script type="text/javascript" src="js/prepara_header.js"></script>
	<script type="text/javascript" src="js/centraliza_vertical.js"></script>
	<!--<script type="text/javascript" src="js/animacao_projetos.js"></script>
	<script type="text/javascript" src="js/animacao_header.js"></script>-->
</head>

<body>
<?php require_once("header.php"); ?>
<?php
$pagina = $_SESSION['pagina'];
$paginaH = 0;
$paginaE = 0;
$paginaES = 0;
$paginaEP = 0;
$paginaS = 0;
$paginaSPo = 0;
$paginaSPr = 0;
$paginaD = 0;
$paginaC = 0;

if(!empty($pagina)){
	switch($pagina){
		case "nav/home":
			$paginaH = 1;
			break;
		case "nav/empresa":
			$paginaE = 1;
			$paginaES = 1;
			break;
		case "nav/perfil":
			$paginaE = 1;
			$paginaEP = 1;
			break;
		case "nav/portifolio":
			$paginaS = 1;
			$paginaSPo = 1;
			break;
		case "nav/projetos":
			$paginaS = 1;
			$paginaSPr = 1;
			break;
		case "nav/documentacao":
			$paginaD = 1;
			break;
		case "nav/contato":
			$paginaC = 1;
			break;
	}
} else{
	$paginaH = 1;
}
?>


<header class="container-fluid<?php echo ($paginaH ? " masterhead" : ""); ?>" role="banner">
	<div id="cabecalho" class="row <?php echo ($paginaH ? "" : " margemHeader"); ?>">
		<figure class="col-xs-12 col-sm-12 col-md-4">
			<a href="index.php?&p=nav/home">
				<img id="logo" class="img-responsive" src="img/logo_mobilli.png" alt="Logotipo Móbilli" title="Móbilli"	/>	
			</a>
		</figure>
		
		<nav class="navbar col-xs-12 col-md-8 col-md-offset-0" role="navigation">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
					<span class = "sr-only">Toggle navigation</span>
					<span class = "icon-bar"></span>
					<span class = "icon-bar"></span>
					<span class = "icon-bar"></span>
				</button>
			</div>

			<div id="menu" class="navbar-right collapse navbar-collapse col-sm-5">
				<ul class="nav navbar-nav">
					<li class="<?php echo ($paginaH ? " active" : "") ?>">
						<a class="nav-link" href="index.php?&p=nav/home">Início</a>
					</li>
					<li class="nav-item dropdown<?php echo ($paginaE ? " active" : "") ?>">
						<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
							Empresa<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li class="dropdown-item<?php echo ($paginaES ? " active" : "") ?>">
								<a class="nav-link"href="index.php?&p=nav/empresa">Sobre a Móbilli</a>
							</li>
							<li class="divider"></li>
							<li class="dropdown-item<?php echo ($paginaEP ? " active" : "") ?>">
								<a class="nav-link" href="#">Perfil</a>
							</li>
						</ul>
					</li>
					<li class="nav-item dropdown<?php echo ($paginaS ? " active" : "") ?>">
						<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
							Serviços<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li class="dropdown-item<?php echo ($paginaSPo ? " active" : "") ?>">
								<a class="nav-link" href="#">Portifólio</a>
							</li>
							<li class="divider"></li>
							<li class="dropdown-item<?php echo ($paginaSPr ? " active" : "") ?>">
								<a class="nav-link" href="#">Projetos</a>
							</li>
						</ul>
					</li>
					<li class="nav-item<?php echo ($paginaD ? " active" : "") ?>">
						<a class="nav-link" href="#">Documentação</a>
					</li>
					<li class="nav-item<?php echo ($paginaC ? " active" : "") ?>">
						<a class="nav-link" href="#">Contato</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>

<?php if($paginaH){ ?>	
	<div id="chamada" class="row hidden-sm hidden-xs">
		<figure class="col-md-5 col-md-offset-1">
			<img id="img-chamada" class="img-responsive float-right" src="img/chamada.jpg" alt="Trânsito Seguro" title="Trânsito Seguro" />
		</figure>

		<div id="caption-chamada" class="col-md-6 col-lg-5">
			<h2 class="text-left text-uppercase">TRÂNSITO SEGURO</h2>
			<h2 class="text-left text-uppercase"><strong>É A GENTE QUEM FAZ</strong></h2>
			<p class="texto-chamada">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquets purus quis lacus tempor cursus. Morbi in nibh at leo tincidunt cursus. Phasellus sed accumsan odio.</p>
		</div>
	</div>
<?php } ?>
</header>

<article class="container-fuid" role="article">

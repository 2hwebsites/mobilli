<header class="container-fluid<?php echo (empty($_SESSION['pagina']) || $_SESSION['pagina'] == "nav/home" ? " masterhead" : ""); ?>" role="banner">
	<div id="cabecalho" class="row<?php echo (empty($_SESSION['pagina']) || $_SESSION['pagina'] == "nav/home" ? "" : " margemHeader"); ?>">
		<figure class="col-md-4 col-xs-12">
			<img id="logo" class="img-responsive" src="img/logo_mobilli.png" alt="Logotipo Móbilli" title="Logotipo Móbilli" />
		</figure>

		<nav id="menu" class="col-xs-12 col-md-7 col-md-offset-1 col-lg-7 col-lg-offset-0" role="navigation">
			<ul class="menu list-unstyled list-inline float-right-md" role="menubar">
				<li class="item-menu text-center" role="menuitem">
					<a href="index.php?&p=nav/home"<?php echo (empty($_SESSION['pagina']) || $_SESSION['pagina'] == 'nav/home' ? " class='ativo'" : "") ?>>
						<span class="glyphicon glyphicon-home hidden-sm hidden-md hidden-lg"></span>
						Início
					</a>
				</li>
				<li class="item-menu text-center" role="menuitem">
					<a href="index.php?&p=nav/empresa"<?php echo ($_SESSION['pagina'] == 'nav/empresa' ? " class='ativo'" : "") ?>>
						<span class="glyphicon glyphicon-briefcase hidden-sm hidden-md hidden-lg"></span>Empresa
					</a>
				</li>
				<li class="item-menu text-center" role="menuitem">
					<a href="#"<?php echo ($_SESSION['pagina'] == 'nav/perfil' ? " class='ativo'" : "") ?>>
						<span class="glyphicon glyphicon-user hidden-sm hidden-md hidden-lg"></span>
						Perfil
					</a>
				</li>
				<li class="item-menu text-center" role="menuitem">
					<a href="#"<?php echo ($_SESSION['pagina'] == 'nav/projetos' ? " class='ativo'" : "") ?>>
						<span class="glyphicon glyphicon-list-alt hidden-sm hidden-md hidden-lg"></span>Projetos
					</a>
				</li>
				<li class="item-menu text-center" role="menuitem">
					<a href="#"<?php echo ($_SESSION['pagina'] == 'nav/contato' ? " class='ativo'" : "") ?>>
						<span class="glyphicon glyphicon-envelope hidden-sm hidden-md hidden-lg"></span>Contato
					</a>
				</li>
			</ul>
		</nav>
	</div>
<?php if(empty($_SESSION['pagina']) || $_SESSION['pagina'] == "nav/home"){ ?>	
	<div id="chamada" class="row hidden-sm hidden-xs">
		<figure class="col-md-6">
			<img id="img-chamada" class="img-responsive float-right" src="img/chamada.jpg" alt="Trânsito Seguro" title="Trânsito Seguro" />
		</figure>

		<div id="caption-chamada" class="col-md-6 col-lg-5">
			<h2 class="text-left text-uppercase">TRÂNSITO SEGURO</h2>
			<h2 class="titulo-chamada text-left text-uppercase"><strong>É A GENTE QUEM FAZ</strong></h2>
			<p class="texto-chamada">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquets purus quis lacus tempor cursus. Morbi in nibh at leo tincidunt cursus. Phasellus sed accumsan odio.</p>
		</div>
	</div>
<?php } ?>
</header>

<article class="container-fuid" role="article">
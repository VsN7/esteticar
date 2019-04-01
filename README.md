# Estéticar

.![Esteticar](http://www.nildcarfunilaria.com.br/imagens/centro-automotivo/funilaria-e-pintura-em-cajamar.jpg)

## Criação de um site de funilaria e pintura

### Link do site: https://esteticar.herokuapp.com/

### Técnologias 

- HTML
- CSS
- Bootstrap

### HTML (Página principal)

`````html

<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="CSS/bootstrap/compiler/bootstrap.css">

    <link rel="stylesheet" href="CSS/bootstrap/compiler/style.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <title>ESTETICAR</title>
    <link rel="shortcut icon" href="imagens/volante.png"/>
    
    <meta name="description" content="Cada cliente um amigo.">
    <meta property="og:image" content="https://esteticar.herokuapp.com/imagens/esteticar.jpeg">

  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">ESTETICAR</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#QM">Quem somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#servico">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contato">Contato</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="galeria.html">Vídeos</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Pesquise aqui" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
        </div>
      </nav>
    </header>
    
    <main  style="margin-top:3.5%;" role="main" class="table-responsive-md">
    
        <div class="bd-example">
            <div  id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <a href="https://esteticar.herokuapp.com/imagens/esteticar.jpeg" target="_blank" ><img alt="Responsive image" src="imagens/esteticar.jpeg" class="d-block w-100" alt=""></a>
                  <div class="carousel-caption d-none d-md-block">
                    <h5></h5>
                    <p></p>
                  </div>
                </div>
                <div class="carousel-item">
                  <a href="galeria.html" target="_blank" ><img alt="Responsive image" src="imagens/carro1.jpg" class="d-block w-100" alt=""></a>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Trabalho de funilaria</h5>
                    <p>Clique aqui para mais detalhes</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <a href="galeria.html" target="_blank" ><img alt="Responsive image" src="imagens/evandro.png" class="d-block w-100" alt=""></a>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Trabalho de funilaria e pintura</h5>
                    <p>Clique aqui para mais detalhes</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <a href="galeria.html" target="_blank" ><img alt="Responsive image" src="imagens/carro2.jpg" class="d-block w-100" alt=""></a>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Serviço de funilaria e pintura</h5>
                    <p>Clique aqui para mais detalhes</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>

          <h2 id="QM" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;" class="featurette-heading">Quem Somos</h2>
      <div class="container marketing">
    
    
        <!-- START THE FEATURETTES -->
    
        <hr class="featurette-divider">
    
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <p class="lead">Somos uma empresa que atua no ramo de funilaria e pintura de veiculos, oferecendo sempre um 
              serviço de qualidade.<br>
              Profissional capacitado com mais de 20 anos de experiência.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="d-block w-100" style="height:100%;width:100%;" src="imagens/QM.jpeg" alt="">
          </div>
        </div>
    
        <hr class="featurette-divider">
    
    
      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->
      <h2 id="servico" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;" class="featurette-heading">Serviços</h2>
      <div class="container marketing">
    
    
        <!-- START THE FEATURETTES -->
    
        <hr class="featurette-divider">
    
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Oferecemos serviço de <span class="text-muted">Fulinaria</span></h2>
            <p class="lead">Reparamos qualquer amassado que o seu carro possua.</p>
          </div>
          <div class="col-md-5">
            <img class="d-block w-100" style="height:100%;width:100%;" src="imagens/fulinaria.jpg" alt="">
          </div>
        </div>
    
        <hr class="featurette-divider">
    
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oferecemos serviço de <span class="text-muted">Pintura</span></h2>
            <p class="lead"></p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="d-block w-100" style="height:100%;width:100%;" src="imagens/pintura.jpg" alt="">
          </div>
        </div>
    
        <hr class="featurette-divider">
    
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Oferecemos serviço de <span class="text-muted">Polimento</span></h2>
            <p class="lead">Polimento cristalizado.</p>
          </div>
          <div class="col-md-5">
            <img class="d-block w-100" style="height:100%;width:100%;" src="imagens/polimento.jpeg" alt="">
          </div>
        </div>
    
        <hr class="featurette-divider">
    
        <!-- /END THE FEATURETTES -->
    
      </div><!-- /.container -->



    
      <h2 id="contato" style="margin-top:2%;margin-bottom: 4%; text-align: center;font-size: 225%; font-weight: bold;" class="featurette-heading">Localização</h2>
        <div class="row featurette">
          <div class="col-md-4">
          </div>
          <div class="col-md-5">
            <div  style="overflow:hidden;width: 400px;position: relative;"><iframe  width="340" height="260" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=rua%20narciso%20fecchio%20rosana%20sp+(Est%C3%A9ticar)&amp;ie=UTF8&amp;t=k&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/en/">embedgooglemaps EN</a> & <a href="http://www.stedentrippers.nl/berlijn.html">Stedentrippers.nl/berlijn.html</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br />
          </div>
        </div>
    
        <hr class="featurette-divider">
    
        <!-- /END THE FEATURETTES -->
    
      </div><!-- /.container -->



      
      <h2 id="contato" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;" class="featurette-heading">Entre em contato conosco</h2>
      <!-- FOOTER -->
      <footer style="text-align: center;padding: 4%; margin-top:3%;">

        <p class="lead" style="margin-bottom:6%; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Telefone: (18) 98154-3068</p>

        <a style="color:#212529;" href="https://esteticar.herokuapp.com/imagens/esteticar.jpeg" target="_blank"><i  style="font-size:300%; " class="fab fa-whatsapp"></i></a><a style="color:#212529;" target="_blank" href="https://www.facebook.com/evandrolopesnasci"><i style="font-size:300%;margin-left: 4%;" class="fab fa-facebook-f"></i></a><a style="color:#212529;" href="https://esteticar.herokuapp.com/imagens/esteticar.jpeg" target="_blank"><i style="font-size:300%;margin-left: 4%;" class="fas fa-at"></i></a> 
      
        <p style="margin-top:4%; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">© ESTETICAR, cada cliente um amigo</p>
      </footer>
    </main>
        
        
        <!-- Tab panes -->
        
  
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="CSS/jquery/dist/jquery.js"></script>
      <script src="CSS/popper/dist/umd/popper.js"></script>
      <script src="CSS/bootstrap/dist/js/bootstrap.js"></script>
  
    </body>
  </html>

`````

### HTML (Página vídeos)

`````html

<!DOCTYPE html>
<html lang="en">
<head>

        <link rel="stylesheet" href="CSS/bootstrap/compiler/bootstrap.css">

        <link rel="stylesheet" href="CSS/bootstrap/compiler/style.css">
    
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ESTETICAR</title>
    <link rel="shortcut icon" href="imagens/volante.png"/>
    
    <meta name="description" content="Cada cliente um amigo.">
    <meta property="og:image" content="https://esteticar.herokuapp.com/imagens/esteticar.jpeg">
</head>
<body>
        <header>
      <div class="bg-dark collapse" id="navbarHeader" style="">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <a class="text-white" href="https://esteticar.herokuapp.com"><h4 class="text-white">Esteticar</h4></a></div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contato</h4>
              <ul class="list-unstyled">
                <li><a href="https://esteticar.herokuapp.com/imagens/esteticar.jpeg" target="_blank" class="text-white">WhatsApp</a></li>
                <li><a href="https://www.facebook.com/evandrolopesnasci" target="_blank" class="text-white">Facebook</a></li>
                <li><a href="https://esteticar.herokuapp.com/imagens/QM.jpeg" target="_blank" class="text-white">Telefone: (18) 98154-3068</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>Serviços estéticar</strong>
          </a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
    
    <main role="main">
    
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Esteticar</h1>
          <p class="lead text-muted">Aqui você pode ter uma noção melhor de que a esteticar é o melhor para o seu veículo</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Página atual</a>
            <a href="#" class="btn btn-secondary my-2">Próxima pagina</a>
          </p>
        </div>
      </section>
    
      <div class="album py-5 bg-light">
        <div class="container">
    
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                    <iframe width="100%" height="225" src="https://www.youtube.com/embed/90ZuHSrwXsI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="card-body">
                  <p class="card-text">Serviço de funilaria e pintura.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Visualizar</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                    </div>
                    <small class="text-muted">6 dias</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="imagens/esteticar.jpeg" alt="">
                <div class="card-body">
                  <p class="card-text">Serviços de funilaria e pintura.</p>
                </div>
              </div>
            </div>
    
                  <div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                            <div width="100%" height="225">
                                    <iframe width="100%" height="225" src="https://www.youtube.com/embed/_XmXYA-24os" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
                            </div>
                          <div class="card-body">
                            <p class="card-text">Serviço de fulinaria e pintura.</p>
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Visualizar</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Editar</button>
                              </div>
                              <small class="text-muted">10 dias</small>
                            </div>
                          </div>
                        </div>
                      </div>
            
          </div>
        </div>
      </div>
    
    </main>
    
    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Retornar para o topo</a>
        </p>
        <p>© ESTETICAR, cada cliente um amigo</p>
      </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script>window.jQuery || document.write('<script src="/docs/4.3/assets/js/vendor/jquery-slim.min.js"><\/script>')</script><script src="/docs/4.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossorigin="anonymous"></script>
    

          <script src="CSS/jquery/dist/jquery.js"></script>
        <script src="CSS/popper/dist/umd/popper.js"></script>
        <script src="CSS/bootstrap/dist/js/bootstrap.js"></script>
    </body>
    <script>
        let editar;
        
    </script>
        
</html>

`````

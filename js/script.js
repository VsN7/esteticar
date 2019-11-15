    new WOW().init();
    let login = 0
    let contaUpload = 0;
    let url = [
        
    ];
    let cont = 0;
    function contaPosicao(x){
      contaUpload = $(x).attr("id");
    }
    $(".imgAdd").click(function(){
        cont++
        
        $(this).closest(".row").find('.imgAdd').before('<div class="col-sm-4 imgUp"><div class="imagePreview"></div><label class="btn btn-primary" onclick="contaPosicao(this)"  id="'+cont+'">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del" onclick="contaPosicao(this)" id='+cont+'></i></div>');
        });
        $(document).on("click", "i.del" , function() {
            $(this).parent().remove();
            let id = 0
            id = $(this).attr('id')
            url[id] = "nullo"
            cont--
        });
        $(function() {
            $(document).on("change",".uploadFile", function()
            {
                    var uploadFile = $(this);
                   
                var files = !!this.files ? this.files : [];
                if (!files.length || !window.FileReader) return; 
        
                if (/^image/.test( files[0].type)){ 
                    var reader = new FileReader(); 
                    reader.readAsDataURL(files[0]); 
                    
                    reader.onloadend = function(){ 
                        try{
                          if(cont == 0){
                            url.pop()
                            url.push(reader.result)
                          }else{
                            url[contaUpload] = reader.result
                          }
                        }catch(e){
                          alert('cai no catch')
                          url.push(reader.result)
                        }
                    uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
                    }
                }
                
            });
        });

        ///////////////////////////////////////////////////email/////////////////
        
        
        
        /////////Cor nav //////////////////////////
        $(".nav-item").click(function(){
                $(".nav-item").removeClass('active')
                $(this).addClass('active')
            }

        );

/////////////////////cadastrar banco////////////////////////////

            
        async function verificaSucesso(i){
             if(i== (url.length-1)){
              $('.uploadImg').html('Upload').removeClass('disabled');
              $('.close').click();
              $('.del').click();
              while(url.length)
                url.pop()
              carregar()
              alert('sucesso!')
            }
          }

        $('.uploadImg').click(async function(){
          
            $('.uploadImg').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Enviando...').addClass('disabled');
            var urls = {
              url : '',
              ciente_id:'0'
            }
            try{
              for(let i = 0; i<url.length;i++){
                if(url[i] != 'nullo'){

                  urls = {
                    url: url[i],
                    cliente_id:'0'
                  }
                
                
                await $.ajax({
                    type: "POST",
                    url: "http://127.0.0.1:3000/api/imagens",
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(urls),
                    
                    success: function(){
                      verificaSucesso(i)
                    },
                    error: function(){
                      alert('falha ao tentar cadastrar')
                    }
                    
                });
                
              }else{
              await verificaSucesso(i)
              }
            }
            }catch(e){
              alert('O banco de dados está indisponivel!')
              $('.uploadImg').html('Upload').removeClass('disabled');
            }

        })
        


        $(".btn-cadastrar").click(function(){
            
            $('.btn-cadastrar').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Validando...').addClass('disabled');
            
            let senha = $('#inputSenha').val();
            let senhaN = $('#inputSenhaN').val();
            let email = $('#inputEmail').val();
            let nome = $('#inputNome').val();
            //url: "http://127.0.0.1:3000/api/users",
            
            if(senha != senhaN){
            
                alert("As senhas não estão iguais!");
                
                $('.btn-cadastrar').html('SALVAR').removeClass('disabled');
            }
            else{
                if(senha == '' || senhaN == '' || email == '' || nome == ''){
                    alert('Preencha todos os campos corretamente');
                    $('.btn-cadastrar').html('SALVAR').removeClass('disabled');
                }
                else{
                    var person = {
                        nome : nome,
                        email: email,
                        senha: senha
                    }
                    $.ajax({
                        type: "POST",
                        url: "http://127.0.0.1:3000/api/users",
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify(person),
                        
                        success: function(){
                            alert('Cadastro realizado com sucesso!')
                            
                            $('.btn-cadastrar').html('SALVAR').removeClass('disabled');
                            $('.close').click();
                            limparCampos();
                        },
                        error: function(){
                            alert('O banco de dados está indisponivel!')
                            
                            $('.btn-cadastrar').html('SALVAR').removeClass('disabled');
                        }
                        
                    });
                }
            }

        });

        //////////Listar ///////////////
         async function carregar(){

          let online = localStorage.getItem("online")
          
          let cliente_id = localStorage.getItem("cliente_id")
          
          let position = 0
          await $(document).ready(function(){
            try{
              login = localStorage.getItem("admin")
              if(login == 1){
                $('#renderLogin').html('<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i><span id="usuarioOnline"></span></a><div class="dropdown-menu dropdown-menu-right dropdown-default"aria-labelledby="navbarDropdownMenuLink-333"><a class="dropdown-item" id="logout" onclick="logout()" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></div></li>')
                $("#usuarioOnline").html(""+online)
                $('#carregaInicio').html('<div class="album py-5 bg-light"><div><div class="d-flex justify-content-center"><label data-toggle="modal" data-target="#adicionarImagens" class="btn btn-secondary"><i class="fas fa-plus"></i></label> </div><div id="foreaach"class="row"></div></div></div>')
                $('#foreaach').html('<div class="d-flex justify-content-center spinerImg"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>')
                $.get('http://127.0.0.1:3000/api/imagens/'+'0',function(response){
                  //alert(response.imagens.url)
                  
                  $('#foreaach').html('')
                    $.each(response, function(i, val){
                    var dat = new Date(val.data); 
                    dat = dat.toLocaleDateString('pt-BR');
                    $('#foreaach').html($('#foreaach').html()+'<div class="col-md-4"><div class="card mb-4 shadow-sm"><div class="view overlay zoom"><img id="imagem" src="'+val.url+'" class="img-fluid tamImg" alt="zoom"><div class="mask flex-center waves-effect waves-light"><p class="white-text">Serviços Esteticar</p></div></div><div class="card-body"><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" onclick="deletar(this)" id="'+val._id+'" class="btn btn-sm btn-outline-secondary">Deletar</button></div><small class="text-muted">'+dat+'</small></div></div></div></div>');
                    position++
                  });
                })
              }else if(login == 0){
                $('#carregaInicio').html('<div class="row"><div id="foreaach" class="spinerImg"></div><div class="modal fade" id="image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="image-gallery-title"></h4><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></div><div class="modal-body"><img id="image-gallery-image" class="img-responsive col-md-12" src=""></div><div class="modal-footer"><button type="button" class="btn btn-secondary float-left" id="show-previous-image"><i class="fa fa-arrow-left"></i></button><button type="button" id="show-next-image" class="btn btn-secondary float-right"><i class="fa fa-arrow-right"></i></button></div></div></div></div></div></div>')
                $('#foreaach').html('<div class="d-flex justify-content-center spinerImg"><div class="spinner-border sp" role="status"><span class="sr-only">Loading...</span></div></div>')
                $('#renderLogin').html('')
                $.get('http://127.0.0.1:3000/api/imagens/'+'0',function(response){
                  //alert(response.imagens.url)
                    $('#foreaach').html('')
                    $.each(response, function(i, val){
                      $('#foreaach').html($('#foreaach').html()+'<div class="col-lg-3 col-md-4 col-xs-6 thumb"><a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""data-image="'+val.url+'"data-target="#image-gallery"><div class="view overlay zoom"><img class="img-thumbnail tamImgC"src="'+val.url+'"alt="Esteticar"><div class="mask flex-center waves-effect waves-light"><p class="white-text">Serviços Esteticar</p></div></a></div></div>')
                    position++
                  });
                    let modalId = $('#image-gallery');
                    carregarImgIndividual()
                })

              }else{
                $('#carregaInicio').html('<div class="row"><div id="foreaach" class="spinerImg"></div><div class="modal fade" id="image-gallery" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="image-gallery-title"></h4><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></div><div class="modal-body"><img id="image-gallery-image" class="img-responsive col-md-12" src=""></div><div class="modal-footer"><button type="button" class="btn btn-secondary float-left" id="show-previous-image"><i class="fa fa-arrow-left"></i></button><button type="button" id="show-next-image" class="btn btn-secondary float-right"><i class="fa fa-arrow-right"></i></button></div></div></div></div></div></div>')
                $('#foreaach').html('<div class="d-flex justify-content-center spinerImg"><div class="spinner-border sp" role="status"><span class="sr-only">Loading...</span></div></div>')
                $('#renderLogin').html('<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i><span id="usuarioOnline"></span></a><div class="dropdown-menu dropdown-menu-right dropdown-default"aria-labelledby="navbarDropdownMenuLink-333"><a class="dropdown-item" id="logout" onclick="logout()" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></div></li>')
                $("#usuarioOnline").html(""+online)
                $.get('http://127.0.0.1:3000/api/imagens/'+cliente_id,function(response){
                  //alert(response.imagens.url)
                    $('#foreaach').html('')
                    $.each(response, function(i, val){
                      $('#foreaach').html($('#foreaach').html()+'<div class="col-lg-3 col-md-4 col-xs-6 thumb"><a class="thumbnail" href="#" data-image-id="" data-toggle="modal" data-title=""data-image="'+val.url+'"data-target="#image-gallery"><div class="view overlay zoom grey lighten-2"><img class="img-thumbnail tamImgC"src="'+val.url+'"alt="Esteticar"><div class="mask flex-center waves-effect waves-light"><p class="white-text">Serviços Esteticar</p></div></a></div></div>')
                    position++
                  });
                    let modalId = $('#image-gallery');
                    carregarImgIndividual()
                })

              }
            }catch(e){
              alert('Erro ao carregar dados....')
            }
          });
          
        }
        

        ///////////////////Efetuar login //////////////////////////


        $(".btn-login").click(function(){
            $('.btn-login').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Validando...').addClass('disabled');
            let loginEmail = $("#inputLoginEmail").val()
            let loginSenha = $("#inputLoginSenha").val()
            $.get('http://127.0.0.1:3000/api/users/'+loginEmail,function(response){
                
                    try{
                        if(response.senha != loginSenha){
                            alert('Login ou senha Incorreta')
                            $('.btn-login').html('ACESSAR').removeClass('disabled');
                        }else{
                          let online = ""
                            if(response.email == 'vsn'){
                                window.open("http://localhost:8080/?admin", "_blank");
                                login = 1
                                localStorage.setItem("admin",login)
                                online = "Admin"
                                localStorage.setItem("online",online)
                                $('.btn-login').html('ACESSAR').removeClass('disabled');
                                $('.close').click();
                            }else{
                              cliente_id = response._id
                              localStorage.setItem("cliente_id",cliente_id)
                              login = 2
                              localStorage.setItem("admin",login)
                              online = response.nome
                              localStorage.setItem("online",online)
                              $('.btn-login').html('ACESSAR').removeClass('disabled');
                              window.open("./galeria.html", "_blank");
                            }
                        }
                    }catch(e){
                        alert('Esse usuário não possui cadastro!')
                        $('.btn-login').html('ACESSAR').removeClass('disabled');
                    }
            })
        })


        function logout(){
          cliente_id = '0'
          localStorage.setItem("cliente_id",cliente_id)
          login = 0
          localStorage.setItem("admin",login)
          online = ''
          localStorage.setItem("online",online)
          $(location).attr('href', './index.html');
        }

    function limparCampos(){
        $('#inputNome').val('')
        $('#inputEmail').val('')
        $('#inputSenha').val('')
        $('#inputSenhaN').val('')
    }

    
    //////////////////////////scroll suave //////////////////////

    const menuItens = document.querySelectorAll('.suave');
    menuItens.forEach(item =>{
        item.addEventListener('click', scrollToIdOnClick);
    })

    function scrollToIdOnClick(event){
        event.preventDefault();
        const elemento = event.target;
        const id = elemento.getAttribute('href');
        const to = document.querySelector(id).offsetTop;
        window.scroll({
            top: to - 80,
            behavior: "smooth"
            
        });
    }

  //////// abrir e renderizar imagem ////////////////
  let img64 = '';
    function abrir(){
        var imagem = document.getElementById('editar').files[0];
        var r = new FileReader();
        r.onload = function(e){
            img64 = r.result;
            document.getElementById('imagem').src = img64;
            alert('rend::'+img64)
        }
        r.readAsDataURL(imagem);
    }


    /////deletar///////////////////////
    function deletar(btn){
      var id = $(btn).attr("id");
      var r=confirm("Deseja realmente excluir essa imagem?");
      if (r==true){
        $.ajax({
          url: 'http://127.0.0.1:3000/api/imagens/'+id,
          type: 'DELETE',
          success: function(data) {     
            alert('deletado com sucesso')
            carregar()
          }
        });
      }
    }

/////modal galeriaa    
        
   
  function carregarImgIndividual(){
    $(document)
      .ready(function () {
    
        loadGallery(true, 'a.thumbnail');
    
        //This function disables buttons when needed
        function disableButtons(counter_max, counter_current) {
          $('#show-previous-image, #show-next-image')
            .show();
          if (counter_max === counter_current) {
            $('#show-next-image')
              .hide();
          } else if (counter_current === 2) {
            $('#show-previous-image')
              .hide();
          }
        }
    
        /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */
        let conta =0
        function loadGallery(setIDs, setClickAttr) {
          let current_image =1,
            selector,
            counter = 0;
    
          $('#show-next-image, #show-previous-image')
            .click(function () {
              if ($(this)
                .attr('id') === 'show-previous-image') {
                current_image-=2;
              } else {
                current_image+=2;
              }
    
              selector = $('[data-image-id="' + current_image + '"]');
              updateGallery(selector);
            });
    
          function updateGallery(selector) {
            let $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title')
              .text($sel.data('title'));
            $('#image-gallery-image')
              .attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
          }
          if (setIDs == true) {
            $('[data-image-id]')
              .each(function () {
                counter++;
                $(this)
                  .attr('data-image-id', counter);
              });
          }
          $(setClickAttr)
            .on('click', function () {
              updateGallery($(this));
            });
        }
      });
    
    // build key actions
    $(document)
      .keydown(function (e) {
        switch (e.which) {
          case 37: // left
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
              $('#show-previous-image')
                .click();
            }
            break;
    
          case 39: // right
            if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
              $('#show-next-image')
                .click();
            }
            break;
    
          default:
            return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
      });
    }
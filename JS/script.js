$(function(){
    //EFEITO ESCONDER - APARECER DO MENU MOBILE
    $('.fa-solid').click(function(){
        $('.nav-mobile').slideToggle();
    })
    //FIM EFEITO ESCONDER - APARECER DO MENU MOBILE

    //EFEITO CAIXA SELECIONADA COM FOTORAMA PAGINA-PRODUTO
    $('.fotorama__thumb-border').css('border-color', '#ED3E37').css('background-image','none');

    //SLIDE PARA DEPOIMENTOS PAGINA INDEX.HTML
    var amountDepoimento = $('.depoimento').length; //como vimos em estruturas anteriores, pegamos o elemento que faremos o slide utilizamos o .lenght para pegar dinamicamente a quantidade
    var IndexAtual = 0; // e precisamos de uma valor para o ponto de partida, normalmente sera o indice 0 (primeiro)

    iniciarDepoimentos();//chamamos as funçoes para depois declara-las
    navegarDepoimentos();//chamamos as funçoes para depois declara-las

    function iniciarDepoimentos(){// essa funçao para iniciar as transiçoes, nesse caso utilizei fadeIn e fadeOut
        $('.depoimento').stop().fadeOut(0); //aqui utilizei .stop para nao dar conflito entre as transiçoes e o 0 como parametro para o fadeOut para nao ver ele sumindo
        $('.depoimento').eq(0).stop().fadeIn(200);// e aqui a mesma logica do de cima mas aqui quero que o indice 0 (eq) tenha uma transiçao de 200 mlseg para aparecer
    };

    function navegarDepoimentos(){// aqui tenho as funçoes para navegar pelo clique
        $('.fa-play-right').click(function(){//seta direita para avançar os depoimentos
            IndexAtual++;//aqui iniciar um laço de repetiçao
            if(IndexAtual >= amountDepoimento){//condiçao para dar efeito de infinito, pois ao chegar no ultimo indice, retornarei ao indice 0
                IndexAtual = 0;
            }
            $('.depoimento').stop().fadeOut(0);//e aqui aplico o efeito de sumir e aparecer, como na logica do iniciarDepoimentos
            $('.depoimento').eq(IndexAtual).stop().fadeIn(200);
        });
        $('.fa-play-left').click(function(){// aqui tenho a funçao de 'voltar' na seta da esquerda
            IndexAtual--; // aqui ao inves de somar subtraio para ter o efeito de 'voltar'
            if(IndexAtual <0){// condicionamento para subtrair do a posiçao do elemento desejado, exemplo, nesse caso temos dois indices no .depoimento entao sempre retornarei -1 e quando for <0 volto do final
                IndexAtual = amountDepoimento-1;
            }
            $('.depoimento').stop().fadeOut(0); // e aqui aplico o mesmo efeito para sumir e aparecer com fadeOut e fadeIn
            $('.depoimento').eq(IndexAtual).stop().fadeIn(200);
        });

    };

    //SLIDE PARA DEPOIMENTOS PAGINA INDEX.HTML

});

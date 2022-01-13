class form{

    constructor(){

    }

    display(){
        var titulo = createElement('h2');
        titulo.html("Corrida Maluca");
        titulo.position(130,0);

        var nome = createInput("Coloque um nome legal :)");
        nome.position(130,160);

        var botao = createButton("ok");
        botao.position(250,200);

        var msgespera = createElement('h2');
        

        botao.mousePressed(function(){
            nome.hide();
            botao.hide();

            var pegueinome = nome.value();

            jogadores += 1;
            jogador.update(pegueinome);
            jogador.updateCount(jogadores);

            msgespera.html("Esperando todos os jogadores")
            msgespera.position(130,160);
        })
    }
}
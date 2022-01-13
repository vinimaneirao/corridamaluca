class player{

    constructor(){

    }

    getCount(){
        
        var numeroj = database.ref('jogadores');
        numeroj.on("value",function(data){
            jogadores = data.val();

        })

    }

    updateCount(contagem){

        database.ref('/').update({jogadores:contagem})
        
    }

    update(nome){
        var nomelugar = "jogador" + jogadores;
        database.ref(nomelugar).set({
            name:nome
        })
    }

}
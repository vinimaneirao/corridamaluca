class estadodojogo{
    
    constructor(){

    }

    getState(){
        var bancodados = database.ref('estadodejogo');
        bancodados.on("value",function(data){
            estadodejogo = data.val()

        })
    }

    update(estado){
        database.ref('/').update({estadodejogo:estado});
    }

    start(){
        if (estadodejogo == 0){
            Jogador = new player();
            Jogador.getCount();

            formulário = new form();
            formulário.display();
        }
    }

}
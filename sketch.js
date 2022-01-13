var database;
var estadodejogo = 0;
var jogadores;
var Jogador;
var formulário;
var estados;
function setup(){
    database = firebase.database();
    createCanvas(500,500);

    estados = new estadodojogo();
    estados.getState();
    estados.start();
   
}

function draw(){
    background("white");
    
    drawSprites();
}


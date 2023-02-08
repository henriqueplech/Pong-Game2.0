//variáveis da bolinha.
let xBolinha = 450;
let yBolinha = 375;
let diametro = 35;
let raio = diametro/2;

//velocidade da bolinha.
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete.
let xRaquete = 5;
let yRaquete = 250;
let comprimentoRaquete = 16;
let alturaRaquete = 160;

//variáveis da raquete oponente.
let xRaqueteOponente = 880;
let yRaqueteOponente = 250;
let comprimentoRaqueteOponente = 16;
let alturaRaqueteOponente = 160;
let velocidadeYOponente ;



let colidiu = false;

//variável do placar.
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo.
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  
}

function setup() {
  createCanvas(900, 650);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBordaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //colisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
} 

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBordaBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0 ) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete );
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW))
    yRaquete -= 5;
  if (keyIsDown(DOWN_ARROW))
    yRaquete += 5;
}
function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
  }
 
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu =  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function movimentaRaqueteOponente(){
  if (keyIsDown(87))
    yRaqueteOponente -= 5;
  if (keyIsDown(83))
    yRaqueteOponente += 5;
  
}
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER)
  textSize(20);
  fill(color(32,178,170));
  rect(330, 18, 50, 30);
  fill(225);
  text(meusPontos, 355, 40)
  fill(color(32,178,170));
  rect(495, 18, 50, 30)
  fill(225);
  text(pontosDoOponente,520,40)
  
}

function marcaPonto(){
  if (xBolinha > 887){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 15){
  pontosDoOponente += 1;
    ponto.play();
  }
}
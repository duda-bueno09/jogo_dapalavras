function setup() {
  createCanvas(400, 400);
   palavra = palavraAleatoria();
  
}

function palavraAleatoria(){
  let palavras = ["duda", "linda", "bueno"]
   return random (palavras);
}

function inicializaCores(){
  background(220);
  fill("green");
  textSize(64);
  textAlign(CENTER, CENTER);
}
  
function draw() {
  inicializaCores();
  let maximo = width;
  let minimo  = 0;
   let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
 /* if (mouseX < 50){
    let palavra = "A";
    text(palavra, 200, 200)
  } else if(mouseX < 100) {
    let palavra = "Am";
  text(palavra, 200, 200);
} else if(mouseX < 150) {
    let palavra = "Ama";
  text(palavra, 200, 200);
} else if(mouseX < 200) {
    let palavra = "Aman";
  text(palavra, 200, 200);
} else if(mouseX < 250) {
    let palavra = "Amand";
  text(palavra, 200, 200);
} else if(mouseX < 300) {
    let palavra = "Amanda";
  text(palavra, 200, 200);
} else if(mouseX < 350) {
} */
}

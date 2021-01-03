var gamma, theta, sigma, delta;

var gameState = 1;

var button1, button2, button3, button4, button5;

var hyper;

function preload(){
  gamma = loadImage("inCo1.png");
  theta = loadImage("inCo2.png");
  sigma = loadImage("inCo3.png");
  delta = loadImage("inCo4.png");

}

function setup(){
  createCanvas(displayWidth-5,displayHeight-70);

  button1 = createButton('Restart Your Day');
  button1.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
  button1.position(displayWidth-226,displayHeight-125);

  button2 = createButton('Continue');
  button2.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
  button2.position(displayWidth-226,displayHeight-125);

  button3 = createButton('Sign The Peace Treaty');
  button3.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
  button3.position(displayWidth-226,displayHeight-125);

  
}

function draw(){
  console.log(displayWidth)
  console.log(displayHeight)

  button1.mousePressed(()=>{
    button1.hide();
    gameState = 2;


    });

    button2.mousePressed(()=>{
      button2.hide();
      gameState = 3;
  
  
      });

          

      button3.mousePressed(()=>{
        gameState = 4;
        button3.hide();
        
  
      
      
        });




  if(gameState === 1){

    background(gamma);

    button1.show();

    button2.hide();
    button3.hide();
    

  }

  if(gameState === 2){

    background(theta);

    button2.show();

    button1.hide();
    button3.hide();
    


  }

  if(gameState === 3){

    background(sigma);

    button3.show();

    button2.hide();
    button1.hide();
    

  }

  if(gameState === 4){

    background(delta);

   
    button2.hide();
    button3.hide();
    button1.hide();


  }




}
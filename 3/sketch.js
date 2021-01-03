var gamma, theta, sigma, delta, zeta;

var gameState = 1;

var button1, button2, button3, button4;

var hyper;

function preload(){
  gamma = loadImage("inCo1.png");
  theta = loadImage("inCo2.png");
  sigma = loadImage("inCo3.png");
  delta = loadImage("inCo4.png");
  zeta = loadImage("inCo5.png");
}

function setup(){
  createCanvas(displayWidth-5,displayHeight-70);

  button1 = createButton('Thank You Sir');
  button1.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
  button1.position(displayWidth-226,displayHeight-125);

  button2 = createButton('Go Home And Sleep');
  button2.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
  button2.position(displayWidth-226,displayHeight-125);

  button3 = createButton('Continue in Dreams');
  button3.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
  button3.position(displayWidth-226,displayHeight-125);

  button4 = createButton('Ask The Old Man');
  button4.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
  button4.position(displayWidth-226,displayHeight-125);

}

function draw(){


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

        button4.mousePressed(()=>{
          gameState = 5;
          button4.hide();
          
    
        
        
          });



  if(gameState === 1){

    background(gamma);

    button1.show();

    button2.hide();
    button3.hide();
    button4.hide();


  }

  if(gameState === 2){

    background(theta);

    button2.show();

    button1.hide();
    button3.hide();
    button4.hide();


  }

  if(gameState === 3){

    background(sigma);

    button3.show();

    button2.hide();
    button1.hide();
    button4.hide();


  }

  if(gameState === 4){

    background(delta);

    button4.show();

    button2.hide();
    button3.hide();
    button1.hide();


  }

  if(gameState === 5){

    background(zeta);



    button2.hide();
    button3.hide();
    button4.hide();
    button1.hide();

    var str = "Click To Continue";
    var result = str.link("https://www.w3schools.com");
    console.log(result);
    document.getElementById("demo").innerHTML = result;

  }


}
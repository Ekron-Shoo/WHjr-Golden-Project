var aplha, sigma, gamma, theta;

var button1, button2, button3, button4;

var gameState = 1;

var hyper;

function preload(){

    alpha = loadImage("fps/imgs/gi.png");
    sigma = loadImage("fps/imgs/inCo1.png");
    gamma = loadImage("fps/imgs/inCo2.png");
    theta = loadImage("fps/imgs/inCo3.png");

}

function setup(){

    createCanvas(displayWidth-5,displayHeight-70);
    
    button1 = createButton('Click To Play');
    button1.size(displayWidth/9.84615384615,displayHeight/18.7);
    button1.position(displayWidth/4*3-20,displayHeight/2-60);

    button2 = createButton('Continue');
    button2.size(displayWidth/5.88505747126,displayHeight/14.3846153846);
    button2.position(displayWidth-226,displayHeight-125);

   

    button4 = createButton('Sign The Treaty');
    button4.size(displayWidth/5.88505747126-7,displayHeight/14.3846153846);
    button4.position(displayWidth-1276,displayHeight-125);


   
    
}

function draw(){

  if(gameState ===1){
    background(alpha);
    button2.hide();
    
    button4.hide();
    
  }

  if(gameState === 2){
    background(sigma);
    button2.show();
    
  }
  
  if(gameState === 3){
    background(gamma);
    
    button4.show();

    var str = "Start To Kill";
    var result = str.link("https://ekron-shoo.github.io/FPS/fps/");
    console.log(result);
    document.getElementById("demo").innerHTML = result;

    
   // hyper.position(displayWidth-155,displayHeight-108);
  }

  if(gameState === 4){
    background(theta);
    
    button4.hide();
    
    var str = "Start To Kill";
    var result = str.link("https://ekron-shoo.github.io/FPS/fps/");
    console.log(result);
    document.getElementById("demo").innerHTML = result;

    
    result.position(displayWidth-155,displayHeight-108);
    result.display();
  }

  button1.mousePressed(()=>{
    button1.hide();
    gameState = 2;


    });

    button2.mousePressed(()=>{
      button2.hide();
      gameState = 3;
  
  
      });

          

      button4.mousePressed(()=>{
        gameState = 4;
        
        button4.hide();
  
      
      
        });
  


    




}

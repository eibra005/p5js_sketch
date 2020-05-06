let bubbles = [];

function setup(){
    
    createCanvas(600,400);
    for(let b = 0; b < 10; b++)
        bubbles[b] = new Bubble(random(width), random(height),24);
    
}

function draw(){
    
    background(0);
  for(let i = 0; i < bubbles.length; i++){
bubbles[i].display();
  bubbles[i].move();
      
        for(let j = i+1; j < bubbles.length; j++){
            
            if(bubbles[i].intersect(bubbles[j])){
               bubbles[i].overlapping = true;
            bubbles[j].overlapping = true;
            }
        }
        
    }
    
    for(let b of bubbles){
      
        if(b.overlapping)
            b.changeColor(255);
        else
            b.changeColor(0);
        
        b.overlapping = false;
    }
    
}



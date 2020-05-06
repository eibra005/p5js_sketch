class Bubble{
    
    constructor(x,y,r){
        this.x = x;
       this.y =  y;
        this.r = r;
        this.brightness = 0;
        this.overlapping = false;
    }
    
    display(){
            stroke(255);
    strokeWeight(3);
        fill(this.brightness,125)
    ellipse(this.x,this.y,this.r*2); 
        }
    
    move(){
               this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
        }
    
    intersect(other){
        
        let d = dist(this.x, this.y, other.x, other.y);
        return d < this.r + other.r;
    }
    
    changeColor(bright){
         this.brightness = bright;
    }
}
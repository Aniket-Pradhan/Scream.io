var Thing = function(x,y,flag,win){
    var alpha = 255;
    this.gone = false;
    this.show = function(){
        alpha -= 15;
        if(flag==1) {
            //image(sprite1, x, y, 50, 50);
            fill(255,0,255,alpha);
            ellipse(x,y,20,20);
        }
        if(flag==2) {
            //image(sprite2, x, y, 50, 50);
            fill(255,0,255,alpha);
            ellipse(x,y,20,20);
        }
        if(flag==3) {
            //image(sprite3, x, y, 50, 50);
            fill(255,0,255,alpha);
            ellipse(x,y,20,20);
        }
        if(alpha < 0){
        //sets if item is out of view
        this.gone = true;
      }
    }
}
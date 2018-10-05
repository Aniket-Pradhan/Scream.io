var Thing = function(x,y){
    var alpha = 255;
    this.gone = false;
    this.show = function(){
        //Set fill alpha and draw circle
        //Decrease opacity for fade effect
        alpha -= 15;
        if(alpha < 0){
            //sets if item is out of view
            this.gone = true;
        }
    }
}

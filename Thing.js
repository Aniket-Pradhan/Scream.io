var Thing = function(x,y,flag){
    var sprite1 = loadImage('1.png');
    var sprite2 = loadImage('2.png');
    var sprite3 = loadImage('3.png');
    this.show = function(){
        if(flag==1) {
            image(sprite1, x, y, 50, 50);
        }
        if(flag==2) {
            image(sprite2, x, y, 50, 50);
        }
        if(flag==3) {
            image(sprite3, x, y, 50, 50);
        }
    }
}
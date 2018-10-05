var things = [];
var users = {};

const socket = io();
socket.on("users",function(info){
	//Get all other users' mouse positions
	users = info;
});

function setup() {
  	createCanvas(windowWidth*75/100, windowHeight);
	background(35, 57 , 91);
}

function draw() {

    //Clear the canvas
    background(35, 57 , 91);
    //Remove outline of things
    noStroke();
    console.log(things.length);
    
    //Loop through all of the objects, and show them
    for(i = things.length - 1; i > -1; i--){
    	var t = things[i];
    	t.show();
    	if(t.gone){
	    	//Remove from the list if out of view as to not lag the browser
	    	things.splice(i,1);
    	}
	};

	//Add new item to the list where the mouse is...
	things.push(new Thing(mouseX,mouseY));

	//Now...add all of the other user's mouse positions to the array (FUN!)
	for(var user in users){
		var u = users[user];
		things.push(new Thing(u.x,u.y));
	};

	//We need to send the server our information so the other players can see it
	socket.emit("info",{"x":mouseX,"y":mouseY});

}

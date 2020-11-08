function add() {
    background_imgtag = new Image();//difine a variable with a new image
    background_imgtag.onload = uploadbackground; //setting function, onloading this variable
    background_imgtag.src = background_image;  // load image

    rover_imgtag = new Image();//difine a variable with a new image
    rover_imgtag.onload = uploadrover; //setting function, onloading this variable
    rover_imgtag.src = rover_image;  // load image


}

function uploadbackground() {
    ctx.drawingimage(background_imgtag, 0, 0, canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawingimage(rover_image, rover_x, rover_y,);
}

window.addEventListener("keydown","my_keydown");

function my_keydown(e)
{
    {
        up();
        console.log("up");
    }
    
    if (keypressed == '40')
    {
        down();
        console.log("down");
    }
    
    if (keypressed == '37')
    {
        left();
        console.log("left");
    }

    if (keypressed == '39')
    {
        rigth();
        console.log("rigth");
    }
}

function up()
{
    if(rover_y>=0)
    {

    rover_y=rover_y - 10;
    console.log("when up arrow is pressed, x =  " + rover_x + " , y = " +rover_y);
    uploadbackground();
    uploadrover();
    }
}

function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	
//Create a reference for canvas 
canvas=document.getElementById("myCanvas");

//Give specific height and width to the car image
car_width='30';
car_height='30';

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x=10;
car_y=10
function add() {
	//upload car, and background images on the canvas.
	greencar_image=new Image();
greencar_image.onload= uploadgreencar;
greencar_image.src= greencar_image;
background_image=new Image();
background_image.onload= uploadbackgroundimage;
background_image.src=background_image;
}

function uploadbackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_image,0,0 , canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_image, car_x,car_y,car_width,car_height);
}
	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
if(car_y>=0){
	car_y= car_y-10;
	console.log("When up pressed,x="+car_x+" y="+car_y);
	 uploadbackgroundimage();
		 uploadgreencar();
	 
}
}

function down()
{
	//Define function to move the car downward
	if(car_y<=0){
		car_y= car_y+10;
		console.log("When up pressed,x="+car_x+" y="+car_y);
		 uploadbackgroundimage();
			 uploadgreencar();

}

function left()
{
	//Define function to move the car left side
	if(car_x>=0){
		car_x= car_x-10;
		console.log("When up pressed,x="+car_x+" y="+car_y);
		 uploadbackgroundimage();
			 uploadgreencar();

}
}

function right()
{
	//Define function to move the car right side
	if(car_x<=0){
		car_x= car_x+10;
		console.log("When up pressed,x="+car_x+" y="+car_y);
		 uploadbackgroundimage();
			 uploadgreencar();
}


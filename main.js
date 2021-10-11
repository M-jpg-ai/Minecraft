var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_object="";

// first way (new way) to write a function.
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_object);
    });
}

// // second way (old way) to write a function.
// function player_update(){
//     fabric.Image.fromURL("player.png",display_image);
// }
// function display_image(Img){
//     player_object=Img;
//     player_object.scaleToWidth(150);
//     player_object.scaleToHeight(150);
//     player_object.set({
//         top:player_y,
//         left:player_x,
//     });
//     canvas.add(player_object);
// }


function block_update(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var key_pressed = e.keyCode;
    console.log(key_pressed);

    if (e.shiftKey==true && key_pressed=="80"){
        console.log("Shift and P are pressed together.");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
  
    if (e.shiftKey==true && key_pressed=="77"){
        console.log("Shift and m are pressed together.");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
     
    if(key_pressed=="38"){
        up();
        console.log("up");
    }

    if(key_pressed=="37"){
        left();
        console.log("left");
    }

    if(key_pressed=="39"){
        right();
        console.log("right");
    }

    if(key_pressed=="40"){
        down();
        console.log("down");
    }

    if (key_pressed=="87"){
        block_update("wall.jpg");
        console.log("wall(w)");
    }

    if (key_pressed=="71"){
        block_update("ground.png");
        console.log("ground(g)");
    }
    if (key_pressed=="76"){
        block_update("light_green.png");
        console.log("light green(l)");
    }
    if (key_pressed=="84"){
        block_update("trunk.jpg");
        console.log("trunk(t)");
    }
    if (key_pressed=="82"){
        block_update("roof.jpg");
        console.log("roof(r)");
    }
    if (key_pressed=="89"){
        block_update("yellow_wall.png");
        console.log("yellow wall(y)");
    }
    if (key_pressed=="68"){
        block_update("dark_green.png");
        console.log("dark green(d)");
    }
    if (key_pressed=="85"){
        block_update("unique.png");
        console.log("unique(u)");
    }
    if (key_pressed=="67"){
        block_update("cloud.jpg");
        console.log("cloud(c)");
    }
    
}

function up(){
    if (player_y>=0){
        canvas.remove(player_object);
        player_y=player_y-block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when up arrow is pressed, x="+player_x+" y="+player_y);
       
        player_update();
    }
}

function down(){
    if (player_y<=400){
        canvas.remove(player_object);
        player_y=player_y+block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when down arrow is pressed, x="+player_x+" y="+player_y);
        
        player_update();
    }
}

function left(){
    if (player_x>=0){
        canvas.remove(player_object);
        player_x=player_x - block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when left arrow is pressed, x=" + player_x + " y="+player_y);
       
        player_update();
    }
}

function right(){
    if (player_x<=850){
        canvas.remove(player_object);
        player_x=player_x+block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when right arrow is pressed, x=" + player_x + " y="+player_y);
        player_update();
    }
}


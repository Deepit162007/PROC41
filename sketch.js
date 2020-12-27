var canvas 
var Drops
var push



function preload(){
    
}

function setup(){
   canvas = (400,400);
    
}

function draw(){
    Drops.display();
    Umbrella.display();

}   

function push(){
    var maxDrops = 100

    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    }

    
}
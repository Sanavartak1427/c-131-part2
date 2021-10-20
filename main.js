function preload(){
    img = loadImage("Background.jpg");
}

function modelLoaded(){
    console.log("ModelLoaded!");
    objectDetector.detect(img, gotresults);
}

function gotresults(error, results){
    if (error){
    console.log("error");
    }
    else{
        console.log(results);
        objects = results;
        }
    

}

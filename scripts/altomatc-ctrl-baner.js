var counter= 1,
quantidadeBaners= 5;

setInterval(function nextImage(){
    counter++;
    if(counter > quantidadeBaners) counter= 1;

    document.querySelector('#impt-baner-' + counter).checked= true;
}, 4000)
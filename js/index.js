var slider = document.querySelectorAll(".slider_item")

//console.log(slider);


let slider_01 = 1;
setInterval(function(){

    if(slider_01<slider.length){
        slider[slider_01-1].style.opacity = 0;
        slider[slider_01].style.opacity = 1;
    }else{
        slider[slider_01-1].style.opacity = 0;
        slider_01 = 0;
        slider[slider_01].style.opacity = 1;
    }
    slider_01 ++;
},3000);
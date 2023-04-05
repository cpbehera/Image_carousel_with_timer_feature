let imageGallery = document.getElementById('imageGallery');
let timerHeading = document.getElementById('timerHeading');
let timer = document.getElementById('timer');
let slides = document.getElementsByClassName('slides');

let counter = 10;

timer.textContent = counter;


setInterval(countDownTimer,1000);

function countDownTimer(){
    counter--;
    timer.textContent = counter;
    if(counter == 0){
        counter = 0;
        timerHeading.style.display = "none";
    }

}
setTimeout(showDiv,10000);


function showDiv(){
    imageGallery.style.display = "block";
    slides[0].style.display = "block";
    setInterval(changeImg,5000);
}

let count = 1;

function changeImg(){
    if(slides[count] < slides.length){
        slides[count].style.display = "block";
        console.log(slides[count]);
        count++;
        if(slides[count] == slides.length){
            count = 0;
        }

    }

}
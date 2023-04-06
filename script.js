let imageGallery = document.getElementById('imageGallery');
let timerHeading = document.getElementById('timerHeading');
let timer = document.getElementById('timer');
let slides = document.getElementsByClassName('slides');

slides[0].style.display = "block";

let counter = 10;

timer.textContent = counter;


setInterval(countDownTimer, 1000);

function countDownTimer() {
    counter--;
    timer.textContent = counter;
    if (counter == 0) {
        counter = 6;

    }

}
let count = slides.length - 1;

setTimeout(changeFirstImg, 10000);
// setInterval(changeImg, 5000);


function changeFirstImg() {
    slides[count].style.opacity = 0;
    console.log(slides[count]);
    console.log(count);
    count = count - 1;
    console.log(count);
}

// if (setTimeout(changeFirstImg, 10000)) {
//     setInterval(() => {
//         if (slides[count] >= 0) {
//             slides[count].style.opacity = 0;
//             // console.log(slides[count], count);
//         }
//     }, 5000);
//     count--;
// } else {
//     count = slides.length - 1;
// }





// function changeImg() {


// }
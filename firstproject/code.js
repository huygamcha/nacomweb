function countdown() {
    var endDate = new Date("2023-06-13 12:00:00"); // Thời gian kết thúc đếm ngược
  
    var countdownElement = document.getElementById("timing-time");
  
    var countdownInterval = setInterval(function() {
      var currentDate = new Date();
      var remainingTime = endDate - currentDate;
  
      if (remainingTime < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Hết thời gian";
        return;
      }
  
      var hours = Math.floor(remainingTime / (1000 * 60 * 60));
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      if (seconds >= 10 && minutes >= 10 ) {
      countdownElement.innerHTML = hours + ":" + minutes + ":" + seconds + "";
    }
      else if (seconds < 10 && minutes >= 10){
      countdownElement.innerHTML = hours + ":" + minutes + ":0" + seconds + "";

      }
      else if (seconds >= 10 && minutes < 10){
        countdownElement.innerHTML = hours + ":0" + minutes + ":" + seconds + "";
      }
      else if (seconds <10 && minutes < 10){
        countdownElement.innerHTML = hours + ":0" + minutes + ":0" + seconds + "";
  
        }
    }, 1000);
  }
  
  countdown();
// Lấy tất cả các carousel và buttons
const carousels = document.querySelectorAll('.carousel');
const buttons = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');

// Lặp qua từng carousel và thêm hành vi chung
carousels.forEach((carousel) => {
  const instance = new bootstrap.Carousel(carousel);

  buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      instance.cycle();
    });
  });
});
// header-main
// header-sub
document.onscroll = function (){
  let a = document.querySelector('#scroll-nav')
   let b = document.querySelector('.header__main')
 
if ( document.documentElement.scrollTop >= '400' ){
  b.classList.add('disabled')
  a.classList.add('flex')
} else {
   b.classList.remove('disabled')
  a.classList.remove('flex')
 }
}


  
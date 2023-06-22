const button = document.querySelector("button");
button.addEventListener("click",() =>{
    window.location.reload();
})
   const  video = document.getElementById("myVideo");
   const btn = document.getElementById("myBtn");
   function myFunction() {
       if (video.paused) {
           video.play();
            btn.innerHTML = "Pause";
       } else {
       video.pause();
            btn.innerHTML = "Play";
        }
    }



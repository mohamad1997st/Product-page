var myVideo = document.getElementById("video1"); 

$(document).ready(function() {
    $(function () {
        $("#commentForm").validate();
    });
});


function playPause() { 
    if (myVideo.paused) 
        myVideo.play();
    else 
        myVideo.pause(); 
}


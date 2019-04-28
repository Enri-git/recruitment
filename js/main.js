
// window.onload = function(){
//     var position = 300;
//     var box = document.getElementsByClassName('slide-left');
//     var t = setInterval(animation,10);

//     function animation(){
//         if(position >= 200){
//             clearInterval(t);
//         }
//         else{
//             position += 1;
//             box.style.left=position + 'px';
//         }
//     }
// }


//Header Scroll
function headAnimation(){
    if (document.body.scrollTop > 70+'px' || document.documentElement.scrollTop > 70)
    {
        document.querySelector('header').className = "head-small";
    } else{
        document.querySelector('header').className = "";
    }
}
window.onscroll = function(){headAnimation()}

// First Title fade-in
window.addEventListener("load", function(e){
    document.querySelector('h1').className = 'fade-in';   
});
/* 
//slide-left
function slideLeft(){
    var moveIn= document.querySelector('.slide-left');
    moveIn.style.left= '-500px';
    setTimeout(()=>{
        moveIn.style.transition= '3s linear';
        moveIn.style.left= '0';
    },1000);
}
window.addEventListener('load', slideLeft); */


 
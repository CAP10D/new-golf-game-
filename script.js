var cursor=document.querySelector('.cursor')
var curblur=document.querySelector('.cursorblur')
document.addEventListener('mousemove',function(e){
   cursor.style.left=e.x+'px';
   cursor.style.top=e.y+'px';
   curblur.style.left=e.x-150+'px';
   curblur.style.top=e.y-150+'px';
})
gsap.to('.nav',{
    backgroundColor:"#000",
    duration:0.3,
    height: "115px",
    scrollTrigger:{
        trigger:'.nav',
        scroller:'body',
        markers:true,
        start:'top -10%',
        end:'top -12%',
        scrub:1
    }

})
gsap.to('.main',{
    backgroundColor:"#000",
    duration:0.3,
    scrollTrigger:{
        trigger:'.main',
        scroller:'body',
        start:'top -10%',
        end:'top -100%',
        scrub:1
    }

})

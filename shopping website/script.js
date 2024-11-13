window.addEventListener('wheel',(dets)=>{
    if(dets.deltaY > 0){
        gsap.to(".move",{
            transform:"translateX(-200%)",
            duration:6,
            delay:0.3,
            repeat:-1,
            ease:"none"
        })
    }
    else{
        gsap.to(".move",{
            transform:"translateX(0%)",
            duration:6,
            delay:0.3,
            repeat:-1,
            ease:"none"
        })
    }
})
gsap.from(".cart",{
        scale:0.5,
        opacity:0,
        duration:3,
        delay:1,
        scrollTrigger:{
        trigger:".cart",
        scroller:"body",
        start:"top bottom",
        end:"bottom 70%",
        scrub:1
    }
})
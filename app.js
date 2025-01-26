let tl=gsap.timeline()

// we cannot write name directly we have to use following methods
// 1) For id we have to use # 
// 2) for class we have to use .

// gsap.from(".page1 .box",{
// opacity:0,
// duration:2,
// delay:0.5,
// rotate:360
// })

// gsap.from(".page1 .box",{
//     opacity:0,
//     duration:2,
//     delay:0.5,
//     scale:2
// })

gsap.from(".page1 .box",{
    scale:3,
    duration:2,
    delay:0.5,
    scrollTrigger:
    {
        trigger:".page2 .box",
        scroller:"body",
        //add smooth animation as using scrub
        scrub:true,
        marker:true
    }
})

gsap.from(".page2 .box",{
    x:600,
    duration:2,
    delay:0.5,
    rotate:360,
    scrollTrigger:
    {
        trigger:".page2 .box",
        scroller:"body",
        //add smooth animation as using scrub
        scrub:true
    }
})

gsap.from(".page3 .box",{
    rotate:360,
    scale:2,
    duration:2,
    delay:0.5,
    scrollTrigger:
    {
        trigger:".page3 .box",
        scroller:"body",
        scrub:true
    }
})
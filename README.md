# Scroll_triggering_in_gsap
this repo contain scroll triggering related content 
---
---
# what is Scroll Triggering
scroll triggering refers a feature where animations are triggered as user scroll through a webpage, it allow interactive scroll triggering.

* to run a scroll trigger we use cdn **scroll trigger option**


```
    <div class="page3">

        <div class="box"> </div>

    </div>

```

* in dom tree first we have page1 and then box
* page1---->box

```

gsap.from(".page3 .box",{
 


})
```

 > trigger: " .page3 .box", // Element that triggers the animation
 >> start: "top center", // When the top of ".box" hits the center of the viewport
  >>>end: "bottom 100px", // End when the bottom of ".box" reaches 100px above the bottom of the viewport
   >>>> scrub: true, // Smooth animation based on scroll position
    >>>>>markers: true, // Adds visual markers for debugging

```
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

```
>in the above code the to control  scroll triggering we have add special fuction with name **scrolltriggering**, that have servral parameter we have to pass to make it stunning.


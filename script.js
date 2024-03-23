gsap.to(".vdodiv",{
    scrollTrigger:{
        trigger:  ".vdodiv",
        start:"top top",
        end:"bottom top",
        markers:true ,
        scrub:.5
    },
    '--clip':"0%",
    ease :power2,
    duration:2
})

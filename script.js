const tl = gsap.timeline();
tl.from("#nav-left div",{
    opacity:0,
    duration:0.5,
    delay:0.5
})
tl.from("#nav-center a",{
    opacity:0,
    duration:0.5,
    stagger:0.5
})
tl.from("#nav-right",{
    opacity:0,
    duration:0.5
})
tl.from("#left h1, #left p",{
    x: -100,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
tl.from("#left button", {
    opacity:0,
    duration:0.5
})
tl.from("#right img",{
    scale:0,
    opacity:0,
    duration:0.5
})
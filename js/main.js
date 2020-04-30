//Idea found in a youtube video and on anime.js website

let tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 3500,
    loop:true
  })

tl.add({
  targets: ".container .column",
  backgroundColor: "rgb(250, 250, 155)",
  width: "90%",
  delay: anime.stagger(500)
})

tl.add({
  targets: ".container .column",
  backgroundColor: "rgb(255, 210, 77)",
  width: "100%",
})

anime({
  targets: '.main-title',
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutQuart'
  },
  scale: {
    value: 2.5,
    duration: 1600,
    delay: 2500,
    endDelay: 2000,
    // easing: 'easeInOutQuart'
  },
  delay: 500, // All properties except 'scale' inherit 250ms delay
  loop: true
})


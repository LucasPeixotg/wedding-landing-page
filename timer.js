// Set the date we're counting down to
var countDownDate = new Date("Jun 29, 2024 10:00:00").getTime()

const timer_element = document.getElementById("timer")

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
  timer_element.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    timer_element.innerHTML = "CHEGOU O MOMENTO"
  }
}, 1000)
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const millisecond = document.querySelector(".millisecond")
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")

pause.style.display = "none"

let sayacMs = 0
let sayacS = 0
let sayacM = 0
let intervalMs = 0

const funcStart = () => {
  intervalMs = setInterval(() => {
  sayacMs++

  if (sayacMs === 100) {
    sayacMs = 0
    sayacS++
  }
  if(sayacS === 60){
    sayacS = 0
    sayacM++
  }

  millisecond.textContent = sayacMs.toString().padStart(2, "0");
  second.textContent = sayacS.toString().padStart(2, "0");
  minute.textContent = sayacM.toString().padStart(2, "0");

}, 10)
}

play.addEventListener("click", () => {
    funcStart()
    play.style.display = "none"
    pause.style.display = "block"
})


pause.addEventListener("click", () => {
    play.style.display = "block"
    pause.style.display = "none"
    clearInterval(intervalMs)
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervalMs)
    play.style.display = "block"
    pause.style.display = "none"
    sayacMs = 0
    sayacS = 0
    sayacM = 0
    intervalMs = 0
    millisecond.textContent = "00"
    second.textContent = "00"
    minute.textContent = "00"
})

const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const millisecond = document.querySelector(".millisecond")
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")

pause.style.display = "none"

let sayacMs = "00"
let sayacS = "00"
let sayacM = "00"
let intervalMs = 0



const funcStart = () => {
  intervalMs = setInterval(() => {
  sayacMs++
  millisecond.textContent = sayacMs
  second.textContent = sayacS
  minute.textContent = sayacM

  if (sayacMs === 100) {
    sayacMs = 0
    sayacS++
  }
  if(sayacS === 60){
    sayacS = 0
    sayacM++
  }
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

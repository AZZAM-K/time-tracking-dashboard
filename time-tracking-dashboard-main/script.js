//sorting by index
let workHours = document.getElementById("work-hours") //index 0
let playHours = document.getElementById("play-hours") //index 1
let studyHours = document.getElementById("study-hours") //index 2
let exerciseHours = document.getElementById("exercise-hours") //index 3
let socialHours = document.getElementById("social-hours") //index 4
let selfCareHours = document.getElementById("selfcare-hours") //index 5
let frames = document.querySelectorAll("a")
function initHours() {
  workHours.innerHTML = ""
  playHours.innerHTML = ""
  studyHours.innerHTML = ""
  exerciseHours.innerHTML = ""
  socialHours.innerHTML = ""
  selfCareHours.innerHTML = ""
}
function getHours(time, position, last) {
  fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      let work = data[0]
      let play = data[1]
      let study = data[2]
      let exercise = data[3]
      let social = data[4]
      let selfCare = data[5]
      initHours()
      workHours.innerHTML += `<span class="current">${work.timeframes[time].current}hrs</span>
                             <span class="previous">Last ${last} - ${work.timeframes[time].previous}hrs</span>`
      playHours.innerHTML += `<span class="current">${play.timeframes[time].current}hrs</span>
                             <span class="previous">Last ${last} - ${play.timeframes[time].previous}hrs</span>`
      studyHours.innerHTML += `<span class="current">${study.timeframes[time].current}hrs</span>
                             <span class="previous">Last ${last} - ${study.timeframes[time].previous}hrs</span>`
      exerciseHours.innerHTML += `<span class="current">${exercise.timeframes[time].current}hrs</span>
                             <span class="previous">Last ${last} - ${exercise.timeframes[time].previous}hrs</span>`
      socialHours.innerHTML += `<span class="current">${social.timeframes[time].current}hrs</span>
                             <span class="previous">Last ${last} - ${social.timeframes[time].previous}hrs</span>`
      selfCareHours.innerHTML += `<span class="current">${selfCare.timeframes[time].current}hrs</span>
                             <span class="previous">Last ${last} - ${selfCare.timeframes[time].previous}hrs</span>`
      frames.forEach(frame => {
        frame.style.color = "var(--desaturated-blue)"
      })
      frames.item(position).style.color = "var(--pale-blue)"
    })
}

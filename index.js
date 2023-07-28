let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

let countExercise = 0

function saveNew() {
    
    countExercise += 1
    exerStr = "Exercise-" + countExercise + ":"+ "  "
    console.log(saveEl.innerHTML)
    if(countExercise == 0){
        saveEl.innerHTML += exerStr
    } else {
        saveEl.innerHTML += "<br>" + exerStr
    }
    // saveEl.textContent += exerStr
}

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.textContent = 0
    count = 0
}




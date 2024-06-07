let ParasaveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")
let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
}

function save() {
    let countStr = ` ${count} -`
    ParasaveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}





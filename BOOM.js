let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let counter = 10;

let indicateId = setInterval(function() {
    counter = counter - 1;
    timerEl.textContent = counter;
    if (counter === 0) {
        timerEl.textContent = "BOOM!!!";
        clearInterval(indicateId);
    }

}, 1000);

defuserEl.addEventListener('keydown', function(event) {
    let bombDefuserText = event.target.value;
    if (bombDefuserText === "defuse" && event.key === "Enter" && counter !== 0) {
        timerEl.textContent = "You successfully defused bomb";
        clearInterval(indicateId);
    }

});
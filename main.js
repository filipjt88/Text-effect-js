let txtDiv  = document.querySelector("#mainTxt");
let speedEl = document.querySelector("#speed");

let txt = `Dobrodošli na naš web sajt`;
let i = 1;
let speed = 1000;


let writeTxt = function() {
    txtDiv.innerHTML = txt.slice(0, i);
    i++;
    if(i > txt.length) {
        i = 1;
    }
    setTimeout(writeTxt, speed);
}

writeTxt();

speedEl.addEventListener("input", (e) => {
    speed = 1000 / e.target.value;
});


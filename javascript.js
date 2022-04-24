function id(id){
    return document.getElementById(id);
}

let spidey = id("spidey");
let goblin = id("goblin");
let yourScore = id('yourScore');
let target = id("target");
let score = 0;

function jump(){
    spidey = id("spidey");
    goblin = id("goblin");
    spidey.classList.add("jump");
    goblin.classList.add("slide");

    if (!spidey.classList.contains("jump")){
        spidey.classList.add("jump");
    }
    setTimeout(function(){
        spidey.classList.remove("jump");
    },500);
    checkScore();
}
function checkScore(){
    let yourScore = id('yourScore');
    let target = id('target');

    if(score===1000) {
        yourScore.textContent = 'Congrats! You Won!';
        goblin.style.visibility = "hidden";
        goblin.style.animation = "none";
    }
    else if(target.textContent === 'Game Over!')
        yourScore.textContent = 'You Lost!';
    else {
        yourScore.textContent = "Your Score: " + score;
        score += 10;
    }
}
let checkDead;
checkDead = setInterval(function () {
    let target = id('target');
    let spideyTop = parseInt(window.getComputedStyle(spidey).getPropertyValue("top"));
    let goblinLeft = parseInt(window.getComputedStyle(goblin).getPropertyValue("left"));
    let cryingSpidey = id("cryingSpidey");

    if (goblinLeft < 10 && goblinLeft > -50 && spideyTop > 120) {
        goblin.style.display = "none";
        spidey.style.display = "none";
        cryingSpidey.style.display = "block";
        goblin.style.animation = "none";
        target.textContent = "Game Over!";
    }
}, 10);
window.addEventListener("keyup",(e)=>{
    if (e.key == "ArrowUp" || e.key == "Enter")
        jump();
});
window.addEventListener("animationiteration", ()=>{
    let goblinTop = parseInt(window.getComputedStyle(goblin).getPropertyValue("top"));
    let random = Math.floor(Math.random() * 2);
    if(goblinTop === 210){
        goblinTop -= random * 30;
    } else {
        goblinTop += random * 30;
    }
    goblin.style.top = goblinTop + 'px';
});
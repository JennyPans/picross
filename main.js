let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let lastTime = 0;
let fps = 0;
let is_fps_visible = false;

function showFPS(dt) {
    fps = 1 / dt;
    ctx.fillStyle = "White";
    ctx.font = "normal 16pt Arial";
    ctx.fillText(Math.floor(fps) + " fps", 10, 20);
}

function run(time) {
    requestAnimationFrame(run);
    // différence de temps entre chaque frame en seconde
    let dt = (time - lastTime) / 1000;
    if (dt < (1 / 60) - 0.001) {
        return;
    }
    lastTime = time;
    update(dt);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(ctx);
    if (is_fps_visible) showFPS(dt);
}

function init() {
    load();
    // on exécute 60 x par seconde la méthode run.
    //https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame
    requestAnimationFrame(run);
}

init();
// let line = [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1];
// let result = [];
// let count = 0;
// for (let indexLine = 0; indexLine < line.length; ++indexLine) {
//     if (line[indexLine] == 1) ++count;
//     if ((count > 0) && (line[indexLine] == 0 || indexLine == line.length - 1)) {
//         result.push(count);
//         count = 0;
//     }
// }
// console.log(result);
let ship;
let keys = {
    "ArrowUp": false,
    "ArrowRight": false,
    "ArrowDown": false,
    "ArrowLeft": false,
};
// let timer = 0;

// optimiser en utilisant le code, en vérifiant si le code est dans le dict ?
function keydown(t) {
    t.preventDefault();
    if (t.code == "ArrowUp") keys.ArrowUp = true;
    if (t.code == "ArrowRight") keys.ArrowRight = true;
    if (t.code == "ArrowDown") keys.ArrowDown = true;
    if (t.code == "ArrowLeft") keys.ArrowLeft = true;
}

function keyup(t) {
    t.preventDefault();
    if (t.code == "ArrowUp") keys.ArrowUp = false;
    if (t.code == "ArrowRight") keys.ArrowRight = false;
    if (t.code == "ArrowDown") keys.ArrowDown = false;
    if (t.code == "ArrowLeft") keys.ArrowLeft = false;
}

function load() {
    ship = new Sprite("images/ship_0000.png", 100, 100);
    document.addEventListener("keydown", keydown, false);
    document.addEventListener("keyup", keyup, false);
}

function update(dt) {
    // test d'un timer avec le deltatime
    // timer += dt;
    // if (timer >= 1) {
    //     timer = 0;
    //     ship.x++;
    //     ship.y++;
    // }
    if (keys.ArrowUp) ship.y -= 1;
    if (keys.ArrowRight) ship.x += 1;
    if (keys.ArrowDown) ship.y += 1;
    if (keys.ArrowLeft) ship.x -= 1;
}

function draw(pCtx) {
    ship.draw(pCtx);
}
function main() {
    canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);

    ctx.font = "20px Helvetica";

    frames = 0;
    keystate = {};

    document.addEventListener("keydown", function (evt) {
        keystate[evt.keyCode] = true;
    });
    document.addEventListener("keyup", function (evt) {
        delete keystate[evt.keyCode];
    });

    init();
    loop();
}
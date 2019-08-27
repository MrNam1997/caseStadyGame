function loop() {
    update();
    draw();
    window.requestAnimationFrame(loop, canvas);
}
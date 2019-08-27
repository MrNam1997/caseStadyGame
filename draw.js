function draw() {
    let tw = canvas.width / grid.width;
    let th = canvas.height / grid.height;

    for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
            switch (grid.get(x, y)) {
                case EMPTY:
                    ctx.fillStyle = "violet";
                    break;
                case SNAKE:
                    ctx.fillStyle = "#8B0000";
                    break;
                case FRUIT:
                    ctx.fillStyle = "green";
                    break;
            }
            ctx.fillRect(x * tw, y * th, tw, th);
        }
    }

    ctx.fillStyle = "blue";
    ctx.fillText("SCORE: " + score, 10, canvas.height - 10);
}

main();
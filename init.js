function init() {
    score = 0;

    grid.init(EMPTY, COLS, ROWS);

    let sp = {x: Math.floor(COLS / 2), y: ROWS - 1};
    snake.init(UP, sp.x, sp.y);
    grid.set(SNAKE, sp.x, sp.y);

    setFood();
}
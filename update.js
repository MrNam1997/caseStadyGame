function update() {
    frames++;   
    if (keystate[KEY_LEFT] && snake.direction !== RIGHT) {
        snake.direction = LEFT;
    }
    if (keystate[KEY_UP] && snake.direction !== DOWN) {
        snake.direction = UP;
    }
    if (keystate[KEY_RIGHT] && snake.direction !== LEFT) {
        snake.direction = RIGHT;
    }
    if (keystate[KEY_DOWN] && snake.direction !== UP) {
        snake.direction = DOWN;
    }
    if (frames % 7 === 0) {
        let nx = snake.last.x;
        let ny = snake.last.y;

        switch (snake.direction) {
            case LEFT:
                nx--;
                break;
            case UP:
                ny--;
                break;
            case RIGHT:
                nx++;
                break;
            case DOWN:
                ny++;
                break;
        }
        if (0 > nx || nx > grid.width - 1 ||
            0 > ny || ny > grid.height - 1 ||
            grid.get(nx, ny) === SNAKE
        ) {
            return init();
        }
        if (grid.get(nx, ny) === FRUIT) {
            score += 10;
            setFood();
        } else {

            let tail = snake.remove();
            grid.set(EMPTY, tail.x, tail.y);
        }

        grid.set(SNAKE, nx, ny);
        snake.insert(nx, ny);
    }
}
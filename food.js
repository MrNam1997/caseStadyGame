function setFood() {
    let empty = [];
    for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
            if (grid.get(x, y) === EMPTY) {
                empty.push({x:   x, y: y});
            }
        }
    }

    let randomFood = empty[Math.round(Math.random() * (empty.length - 1))];
    grid.set(FRUIT, randomFood.x, randomFood.y);
}
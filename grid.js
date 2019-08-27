grid = {
    init: function (direction, width, height) {
        this.width = width;
        this.height = height;

        this.grid = [];
        for (let x = 0; x < width; x++) {
            this.grid.push([]);
            for (let y = 0; y < height; y++) {
                this.grid[x].push(direction);
            }
        }
    },

    set: function (val, x, y) {
        this.grid[x][y] = val;
    },

    get: function (x, y) {
        return this.grid[x][y];
    }
};
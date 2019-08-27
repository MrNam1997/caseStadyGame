snake = {
    direction: null,
    last: null,
    queue: null,

    init: function (d, x, y) {
        this.direction = d;

        this.queue = [];
        this.insert(x, y);
    },

    insert: function (x, y) {

        this.queue.unshift({x: x, y: y});
        this.last = this.queue[0];
    },

    remove: function () {
        return this.queue.pop();
    }
};
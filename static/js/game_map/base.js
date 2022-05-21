import {GameObject} from '/static/js/game_object/base.js';

export class GameMap extends GameObject {
    constructor(root) {
        super();
        this.root = root;
        // 设置画布并聚焦
        let $canvas = $('<canvas width="1280" height="720" tabindex="0"></canvas>');
        // 取出canvas并设置为2d画布
        this.ctx = $canvas[0].getContext('2d');
        this.root.$kof.append($canvas);
        $canvas.focus();
    }

    start() {

    }

    update() {
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        console.log(this.ctx.canvas.height);
    }
}
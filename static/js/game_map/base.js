import { GameObject } from '../game_object/base.js';
import { Controller } from '../controller/base.js';

class GameMap extends GameObject {
    // 参数root是KOF类 传入root的原因是方便索引地图上每一个元素
    constructor(root) {
        super();

        this.root = root;
        // 设置画布
        this.$canvas = $('<canvas width="1280" height="720" tabindex="0" autofocus="autofocus"></canvas>');
        // 取出canvas并设置为2d画布
        this.ctx = this.$canvas[0].getContext('2d');
        // 在div上添加画布
        this.root.$kof.append(this.$canvas);
        // 在canvas上获取按键
        this.controller = new Controller(this.$canvas);

        // 在div上布局血条和计时器
        this.root.$kof.append($(`<div class="kof-head">
        <div class="kof-head-hp-0"><div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-head-hp-1"><div></div></div>
        </div>`));
    }

    start() {   // 初始时执行一次

    }

    update() {  // 每一帧都执行一次
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}

export {
    GameMap
}
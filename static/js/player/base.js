import { GameObject } from "../game_object/base.js";

class Player extends GameObject {
    // info为player的相关信息
    constructor(root, info) {
        super();
        /*
        这里判断角色间是否能攻击到时，把其抽象成一个矩形方便判断。后面再在矩形中引入动画
        */
        this.root = root;
        // 区分角色的id
        this.id = info.id;
        // 位置坐标
        this.x = info.x;
        this.y = info.y;
        // 宽高
        this.width = info.width;
        this.height = info.height;
        // 颜色
        this.color = info.color;
        // x、y方向的速度
        this.vx = 0;
        this.vy = 0;
        // 水平、垂直方向的初始速度 单位为像素/秒
        this.speedx = 400;
        this.speedy = 1000;
        // 从root中取出ctx
        this.ctx = this.root.game_map.ctx;
    }

    start() {

    }

    update() {
        this.render();
    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export {
    Player
}
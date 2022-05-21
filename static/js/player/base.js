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
        // x、y方向的速度
        this.vx = 0;
        this.vy = 0;
        // 水平、垂直方向的初始速度 单位为像素/秒
        this.speedx = 400;
        this.speedy = -1000;
        // 重力加速度
        this.gravity = 50;
        // 方向
        this.direction = 1;
        // 宽高
        this.width = info.width;
        this.height = info.height;
        // 颜色
        this.color = info.color;
        // 状态 0:idle 1: 向前 2： 向后 3：跳跃 4：攻击 5：被打 6：死亡
        this.status = 3;
        // 从root中取出ctx
        this.ctx = this.root.game_map.ctx;
        // 获取按键
        this.pressed_keys = this.root.game_map.controller.pressed_keys;
    }

    start() {

    }

    update() {
        this.update_control(); 
        this.update_move();   
        this.render();
    }

    // 初始时从高处跳下
    update_move() {
        this.vy += this.gravity;
        
        this.x += this.vx * this.timedelta / 1000;
        this.y += this.vy * this.timedelta / 1000;
        if (this.y > 450) {
            this.y = 450;
            this.vy = 0;
            this.status = 0;
        }
        if (this.x < 0) this.x = 0;
        else if (this.x + this.width > this.root.game_map.$canvas.width()) {
            this.x = this.root.game_map.$canvas.width() - this.width;
        }
    }

    // 移动
    update_control() {
        let w, a, d, space;
        // 获取玩家一或玩家二的按键移动
        if (this.id == 0) {
            w = this.pressed_keys.has('w');
            a = this.pressed_keys.has('a');
            d = this.pressed_keys.has('d');
            space = this.pressed_keys.has(' ');
        }
        else {
            w = this.pressed_keys.has('ArrowUp');
            a = this.pressed_keys.has('ArrowLeft');
            d = this.pressed_keys.has('ArrowRight');
            space = this.pressed_keys.has('Enter');
        }
        /*
        只有在静止或左右移动时才可以跳跃
        */
       if (this.status === 0 || this.status === 1 || this.status === 2) {
           if (w) {
               if(d) {
                   this.vx = this.speedx;
               }
               else if (a) {
                   this.vx = -this.speedx;
               }
               else {
                   this.vx = 0;
               }
               this.vy = this.speedy;
               this.status = 3;
           }
           else if (d) {
               this.vx = this.speedx;
               this.status = 1;
           }
           else if (a) {
               this.vx = -this.speedx;;
               this.status = 2;
           }
           else {
                this.vx = 0;
                this.status = 0;
           }
       } 
    }

    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export {
    Player
}
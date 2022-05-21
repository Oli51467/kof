let GAME_OBJECT = [];

class GameObject {
    constructor() {
        GAME_OBJECT.push(this);
        this.timedelta = 0; // 相邻两帧的时间间隔
        this.has_call_start = false;
    }

    start() {   // 初始执行一次

    }

    update() {  // 除第一帧外，每一帧执行一次

    }

    destroy() { //删除当前对象
        for (let i in GAME_OBJECT) {
            if (GAME_OBJECT[i] === this) {
                GAME_OBJECT.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp; // 记录上一帧在什么时刻执行

/*
 该函数会在下次浏览器刷新页面之前执行一次，通常会用递归写法使其每秒执行60次func函数。
 调用时会传入一个参数，表示函数执行的时间戳，单位为毫秒。
 */
let GAME_OBJECT_FRAME = (timestamp) => {
    // 枚举游戏对象
    for (let obj of GAME_OBJECT) {
        // 若没开始执行 则执行
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        }
        // 已经执行则update
        else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(GAME_OBJECT_FRAME);
}

requestAnimationFrame(GAME_OBJECT_FRAME);

export {
    GameObject
}
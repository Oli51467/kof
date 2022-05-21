import { Player } from "./base.js";
import { GIF } from '../utils/gif.js';

class Kyo extends Player {
    constructor (root, info) {
        super(root, info);

        this.init_animations();
    }

    // 初始化动画
    init_animations() {
        let offsets = [0, -22, -22, -140, 0, 0, 0];
        let outer = this;
        for (let i = 0; i < 7; i ++ ) {
            // 用第三方工具类GIF加载gif
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,   // 当前动画的总帧数 初始为0
                frame_rate: 5,  // 每秒刷帧速率 每5帧过度一次
                offset_y: offsets[i],    // 竖直方向偏移量
                loaded: false,  // 是否加载进来
                scale: 2,       // 缩放比
            });
            
            // 加载完后更新帧数
            gif.onload = () => {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;
                if (i === 3) {
                    obj.frame_rate = 4;
                }
            }
        }
    }
}

export {
    Kyo
}
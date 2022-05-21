import {GameMap} from './game_map/base.js';
import {Kyo} from './player/kyo.js';

class KOF {
    // 将id = kof的div选择出来
    constructor(id) {
        this.$kof = $('#' + id);
        // 创建背景地图
        this.game_map = new GameMap(this);
        // 创建两名角色
        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                height: 200,
                width: 120,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 900,
                y: 0,
                height: 200,
                width: 120,
                color: 'green',
            })
        ];
    }
}

export {
    KOF
}
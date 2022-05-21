import {GameMap} from './game_map/base.js';
import {Player} from './player/base.js';

class KOF {
    // 将id = kof的div选择出来
    constructor(id) {
        this.$kof = $('#' + id);
        // 创建背景地图
        this.game_map = new GameMap(this);
        // 创建两名角色
        this.players = [
            new Player(this, {
                id: 0,
                x: 0,
                y: 0,
                height: 150,
                width: 200,
                color: 'blue',
            }),
            new Player(this, {
                id: 1,
                x: 500,
                y: 0,
                height: 150,
                width: 200,
                color: 'blue',
            })
        ];
    }
}

export {
    KOF
}
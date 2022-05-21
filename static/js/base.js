import { GameMap } from './game_map/base.js';

class KOF {
    // 将id = kof的div选择出来
    constructor(id) {
        this.$kof = $('#kof');

        this.game_map = new GameMap(this);
    }
}

export {
    KOF
}
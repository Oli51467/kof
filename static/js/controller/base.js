class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.pressed_keys = new Set();
        this.start();
    }

    start() { // 获取按键 按下获取 抬起取消
        this.$canvas.keydown((e) => {
            this.pressed_keys.add(e.key);
        });
        this.$canvas.keyup((e) => {
            this.pressed_keys.delete(e.key);
        });
    }
}

export {
    Controller
}
var KeyboardHelper = /** @class */ (function () {
    function KeyboardHelper() {
    }
    KeyboardHelper.getDirection = function (keyboardDirection) {
        var x;
        var y;
        if (keyboardDirection.isDown && keyboardDirection.isLeft) {
            x = -1;
            y = 1;
        }
        else if (keyboardDirection.isDown && keyboardDirection.isRight) {
            x = 1;
            y = 1;
        }
        else if (keyboardDirection.isUp && keyboardDirection.isLeft) {
            x = -1;
            y = -1;
        }
        else if (keyboardDirection.isUp && keyboardDirection.isRight) {
            x = 1;
            y = -1;
        }
        else if (keyboardDirection.isUp) {
            x = 0;
            y = -1;
        }
        else if (keyboardDirection.isDown) {
            x = 0;
            y = 1;
        }
        else if (keyboardDirection.isLeft) {
            x = -1;
            y = 0;
        }
        else if (keyboardDirection.isRight) {
            x = 1;
            y = 0;
        }
        else {
            x = 0;
            y = 0;
        }
        return { x: x, y: y };
    };
    return KeyboardHelper;
}());
export { KeyboardHelper };
//# sourceMappingURL=../../../../src/src/input/devices/keyboard/keyboard.helper.js.map
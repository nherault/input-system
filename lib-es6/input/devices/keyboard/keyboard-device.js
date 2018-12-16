import { KeyboardService } from './keyboard.service';
export var KeyboardEventType;
(function (KeyboardEventType) {
    KeyboardEventType["KEY_UP"] = "keyup";
    KeyboardEventType["KEY_DOWN"] = "keydown";
    KeyboardEventType["KEY_TOGGLE"] = "keytoggle";
})(KeyboardEventType || (KeyboardEventType = {}));
var KeyboardDevice = /** @class */ (function () {
    function KeyboardDevice() {
        this.keyboardService = new KeyboardService();
    }
    KeyboardDevice.prototype.init = function () {
        this.keyboardService.activate()
            .resetAllKeys();
        return this;
    };
    KeyboardDevice.prototype.activate = function () {
        this.keyboardService.activate();
        return this;
    };
    KeyboardDevice.prototype.addInput = function (event, callback, value) {
        if (value) {
            event = event.toLowerCase();
            if (event === KeyboardEventType.KEY_UP) {
                this.keyboardService.addKeyUp(value, callback);
            }
            else if (event === KeyboardEventType.KEY_DOWN) {
                this.keyboardService.addKeyDown(value, callback);
            }
            else if (event === KeyboardEventType.KEY_TOGGLE) {
                this.keyboardService.addKeyToogle(value, callback);
            }
        }
        return this;
    };
    KeyboardDevice.prototype.clearInputs = function () {
        this.keyboardService.resetAllKeys();
        return this;
    };
    KeyboardDevice.prototype.release = function () {
        this.keyboardService.release();
        return this;
    };
    KeyboardDevice.type = 'keyboard';
    return KeyboardDevice;
}());
export { KeyboardDevice };
//# sourceMappingURL=../../../../src/src/input/devices/keyboard/keyboard-device.js.map
import { MouseService } from './mouse.service';
export var MouseEventType;
(function (MouseEventType) {
    MouseEventType["MOUSE_CLICK"] = "click";
    MouseEventType["MOUSE_DOWN"] = "mousedown";
    MouseEventType["MOUSE_UP"] = "mouseup";
    MouseEventType["MOUSE_ENTER"] = "mouseenter";
    MouseEventType["MOUSE_LEAVE"] = "mouseleave";
    MouseEventType["MOUSE_MOVE"] = "mousemove";
    MouseEventType["MOUSE_OVER"] = "mouseover";
    MouseEventType["MOUSE_OUT"] = "mouseout";
    MouseEventType["WHEEL"] = "wheel";
})(MouseEventType || (MouseEventType = {}));
var MouseDevice = /** @class */ (function () {
    function MouseDevice() {
        this.mouseService = new MouseService();
    }
    MouseDevice.prototype.init = function () {
        this.mouseService.activate()
            .resetAllMouseEvents();
        return this;
    };
    MouseDevice.prototype.activate = function () {
        this.mouseService.activate();
        return this;
    };
    // TODO: value at the end because optional?
    MouseDevice.prototype.addInput = function (event, callback) {
        event = event.toLowerCase();
        this.mouseService.addMouseEvent(event, callback);
        return this;
    };
    MouseDevice.prototype.clearInputs = function () {
        this.mouseService.resetAllMouseEvents();
        return this;
    };
    MouseDevice.prototype.release = function () {
        this.mouseService.release();
        return this;
    };
    MouseDevice.type = 'mouse';
    return MouseDevice;
}());
export { MouseDevice };
//# sourceMappingURL=../../../../src/src/input/devices/mouse/mouse-device.js.map
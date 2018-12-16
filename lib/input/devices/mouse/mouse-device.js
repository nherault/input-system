"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mouse_service_1 = require("./mouse.service");
var MouseEventType;
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
})(MouseEventType = exports.MouseEventType || (exports.MouseEventType = {}));
var MouseDevice = /** @class */ (function () {
    function MouseDevice() {
        this.mouseService = new mouse_service_1.MouseService();
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
exports.MouseDevice = MouseDevice;
//# sourceMappingURL=../../../../src/src/input/devices/mouse/mouse-device.js.map
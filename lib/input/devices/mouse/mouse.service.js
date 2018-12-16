"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mouse_device_1 = require("./mouse-device");
// Do LeftClick / RightClick / MiddleClick...etc
var MouseService = /** @class */ (function () {
    function MouseService() {
        this.mouseEvent = {};
        this.onMouseEventListenerBind = this.onMouseEventListener.bind(this);
    }
    MouseService.prototype.getMouseInfo = function () {
        return this.mouseInfo;
    };
    MouseService.prototype.activate = function () {
        window.addEventListener(mouse_device_1.MouseEventType.MOUSE_DOWN, this.onMouseEventListenerBind, true);
        window.addEventListener(mouse_device_1.MouseEventType.MOUSE_UP, this.onMouseEventListenerBind, true);
        window.addEventListener(mouse_device_1.MouseEventType.MOUSE_ENTER, this.onMouseEventListenerBind, true);
        window.addEventListener(mouse_device_1.MouseEventType.MOUSE_LEAVE, this.onMouseEventListenerBind, true);
        window.addEventListener(mouse_device_1.MouseEventType.MOUSE_MOVE, this.onMouseEventListenerBind, true);
        window.addEventListener(mouse_device_1.MouseEventType.MOUSE_OVER, this.onMouseEventListenerBind, true);
        window.addEventListener(mouse_device_1.MouseEventType.MOUSE_OUT, this.onMouseEventListenerBind, true);
        window.addEventListener(mouse_device_1.MouseEventType.WHEEL, this.onMouseEventListenerBind, true);
        return this;
    };
    MouseService.prototype.addMouseEvent = function (mouseEventKey, callback) {
        this.mouseEvent[mouseEventKey] = callback;
        return this;
    };
    MouseService.prototype.removeMouseEvent = function (mouseEventKey) {
        this.mouseEvent[mouseEventKey] = undefined;
        return this;
    };
    MouseService.prototype.resetAllMouseEvents = function () {
        this.mouseEvent = {};
        return this;
    };
    MouseService.prototype.release = function () {
        window.removeEventListener(mouse_device_1.MouseEventType.MOUSE_DOWN, this.onMouseEventListenerBind, true);
        window.removeEventListener(mouse_device_1.MouseEventType.MOUSE_UP, this.onMouseEventListenerBind, true);
        window.removeEventListener(mouse_device_1.MouseEventType.MOUSE_ENTER, this.onMouseEventListenerBind, true);
        window.removeEventListener(mouse_device_1.MouseEventType.MOUSE_LEAVE, this.onMouseEventListenerBind, true);
        window.removeEventListener(mouse_device_1.MouseEventType.MOUSE_MOVE, this.onMouseEventListenerBind, true);
        window.removeEventListener(mouse_device_1.MouseEventType.MOUSE_OVER, this.onMouseEventListenerBind, true);
        window.removeEventListener(mouse_device_1.MouseEventType.MOUSE_OUT, this.onMouseEventListenerBind, true);
        window.removeEventListener(mouse_device_1.MouseEventType.WHEEL, this.onMouseEventListenerBind, true);
        return this;
    };
    MouseService.prototype.onMouseEventListener = function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        var mouseClickFct = this.mouseEvent[event.type];
        if (mouseClickFct !== undefined) {
            this.mouseInfo = event;
            mouseClickFct(event);
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
    };
    return MouseService;
}());
exports.MouseService = MouseService;
//# sourceMappingURL=../../../../src/src/input/devices/mouse/mouse.service.js.map
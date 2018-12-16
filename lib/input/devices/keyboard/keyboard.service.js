"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keyboard_device_1 = require("./keyboard-device");
var KeyboardService = /** @class */ (function () {
    function KeyboardService() {
        this.keyDowns = {};
        this.keyUps = {};
        this.keyToogles = {};
        this.keyDownListenerBind = this.keyDownListener.bind(this);
        this.keyUpListenerBind = this.keyUpListener.bind(this);
    }
    KeyboardService.prototype.activate = function () {
        window.addEventListener(keyboard_device_1.KeyboardEventType.KEY_DOWN, this.keyDownListenerBind, true);
        window.addEventListener(keyboard_device_1.KeyboardEventType.KEY_UP, this.keyUpListenerBind, true);
        return this;
    };
    KeyboardService.prototype.addKeyDown = function (key, callback) {
        this.keyDowns[key] = callback;
        return this;
    };
    KeyboardService.prototype.addKeyUp = function (key, callback) {
        this.keyUps[key] = callback;
        return this;
    };
    KeyboardService.prototype.addKeyToogle = function (key, callback) {
        this.keyToogles[key] = callback;
        return this;
    };
    KeyboardService.prototype.removeKeyDown = function (key) {
        this.keyDowns[key] = undefined;
        return this;
    };
    KeyboardService.prototype.removeKeyUp = function (key) {
        this.keyUps[key] = undefined;
        return this;
    };
    KeyboardService.prototype.removeKeyToogle = function (key) {
        this.keyToogles[key] = undefined;
        return this;
    };
    KeyboardService.prototype.resetKeyDowns = function () {
        this.keyDowns = {};
        return this;
    };
    KeyboardService.prototype.resetKeyUps = function () {
        this.keyDowns = {};
        return this;
    };
    KeyboardService.prototype.resetKeyToogles = function () {
        this.keyToogles = {};
        return this;
    };
    KeyboardService.prototype.resetAllKeys = function () {
        this.resetKeyDowns();
        this.resetKeyUps();
        this.resetKeyToogles();
        return this;
    };
    KeyboardService.prototype.release = function () {
        window.removeEventListener(keyboard_device_1.KeyboardEventType.KEY_DOWN, this.keyDownListenerBind, true);
        window.removeEventListener(keyboard_device_1.KeyboardEventType.KEY_UP, this.keyUpListenerBind, true);
        return this;
    };
    KeyboardService.prototype.keyDownListener = function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        if (this.keyDowns[event.key]) {
            this.keyDowns[event.key]();
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
        if (this.keyToogles[event.key]) {
            this.keyToogles[event.key](true);
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
    };
    KeyboardService.prototype.keyUpListener = function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        if (this.keyUps[event.key]) {
            this.keyUps[event.key]();
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
        if (this.keyToogles[event.key]) {
            this.keyToogles[event.key](false);
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
    };
    return KeyboardService;
}());
exports.KeyboardService = KeyboardService;
//# sourceMappingURL=../../../../src/src/input/devices/keyboard/keyboard.service.js.map
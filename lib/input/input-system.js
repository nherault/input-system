"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initial_config_1 = require("./initial-config/initial-config");
var InputSystemDefault = /** @class */ (function () {
    function InputSystemDefault() {
        this.actions = {};
        this.config = initial_config_1.initialConfig;
    }
    InputSystemDefault.prototype.init = function (config) {
        this.config = config;
    };
    InputSystemDefault.prototype.initDevice = function (type) {
        if (this.config.inputDevices[type] && !this.config.inputDevices[type].active) {
            this.config.inputDevices[type].value.init();
            this.config.inputDevices[type].active = true;
        }
        return this;
    };
    InputSystemDefault.prototype.activateAllDevices = function () {
        for (var key in this.config.inputDevices) {
            if (this.config.inputDevices[key].value && !this.config.inputDevices[key].active) {
                this.config.inputDevices[key].value.activate();
                this.config.inputDevices[key].active = true;
            }
        }
        return this;
    };
    InputSystemDefault.prototype.releaseAllDevices = function () {
        var _this = this;
        Object.keys(this.config.inputDevices).forEach(function (key) {
            _this.config.inputDevices[key].value.release();
            _this.config.inputDevices[key].active = false;
        });
        return this;
    };
    InputSystemDefault.prototype.registerInputDevice = function (type, inputDevice) {
        if (this.config.inputDevices[type]) {
            this.config.inputDevices[type].value.release();
        }
        this.config.inputDevices[type] = { value: inputDevice, active: false };
        return this;
    };
    InputSystemDefault.prototype.addInput = function (input) {
        var _this = this;
        this.config.inputDevices[input.device].value
            .addInput(input.event, function (eventParams) { return _this.actions[input.action] = {
            deviceId: input.device,
            eventParams: eventParams,
            inputParams: input.params,
        }; }, input.value);
        return this;
    };
    InputSystemDefault.prototype.addInputs = function (inputs) {
        var _this = this;
        inputs.forEach(function (input) { return _this.addInput(input); });
        return this;
    };
    InputSystemDefault.prototype.clearInputs = function () {
        var _this = this;
        Object.keys(this.config.inputDevices).forEach(function (key) {
            _this.config.inputDevices[key].value.clearInputs();
        });
        return this;
    };
    InputSystemDefault.prototype.handleActions = function (callback) {
        for (var key in this.actions) {
            if (this.actions.hasOwnProperty(key)) {
                callback(key, this.actions[key]);
            }
        }
        return this;
    };
    InputSystemDefault.prototype.clearActions = function () {
        this.actions = {};
        return this;
    };
    return InputSystemDefault;
}());
exports.InputSystemDefault = InputSystemDefault;
//# sourceMappingURL=../../src/src/input/input-system.js.map
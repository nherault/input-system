import { initialConfig } from './initial-config/initial-config';
import { Input, InputAction, InputDevice, InputSystem, InputSystemConfig } from './input-system.types';

export class InputSystemDefault implements InputSystem {

    private actions: any;
    private config: InputSystemConfig;

    constructor() {
        this.actions = {};
        this.config = initialConfig;
    }

    public init(config: InputSystemConfig): void {
        this.config = config;
    }

    public initDevice(type: string): InputSystem {
        if (this.config.inputDevices[type] && !this.config.inputDevices[type].active) {
            this.config.inputDevices[type].value.init();
            this.config.inputDevices[type].active = true;
        }
        return this;
    }

    public activateAllDevices(): InputSystem {
        for (const key in this.config.inputDevices) {
            if (this.config.inputDevices[key].value && !this.config.inputDevices[key].active) {
                this.config.inputDevices[key].value.activate();
                this.config.inputDevices[key].active = true;
            }
        }
        return this;
    }

    public releaseAllDevices(): InputSystem {
        Object.keys(this.config.inputDevices).forEach((key) => {
            this.config.inputDevices[key].value.release();
            this.config.inputDevices[key].active = false;
        });
        return this;
    }

    public registerInputDevice(type: string, inputDevice: InputDevice): InputSystem {
        if (this.config.inputDevices[type]) {
            this.config.inputDevices[type].value.release();
        }
        this.config.inputDevices[type] = {value: inputDevice, active: false};
        return this;
    }

    public addInput(input: Input): InputSystem {
        this.config.inputDevices[input.device].value
            .addInput(input.event, (eventParams: any) => this.actions[input.action] = {
                deviceId: input.device,
                eventParams,
                inputParams: input.params,
            }, input.value);
        return this;
    }

    public addInputs(inputs: Input[]): InputSystem {
        inputs.forEach((input) => this.addInput(input));
        return this;
    }

    public clearInputs(): InputSystem {
        Object.keys(this.config.inputDevices).forEach((key) => {
            this.config.inputDevices[key].value.clearInputs();
        });
        return this;
    }

    public handleActions(callback: (key: string, inputParams: InputAction) => void): InputSystem {
        for (const key in this.actions) {
            if (this.actions.hasOwnProperty(key)) {
                callback(key, this.actions[key]);
            }
        }
        return this;
    }

    public clearActions(): InputSystem {
        this.actions = {};
        return this;
    }
}

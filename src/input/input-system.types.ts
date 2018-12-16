export interface InputDevice {
    init: () => InputDevice;
    activate: () => InputDevice;
    release: () => InputDevice;
    addInput: (event: string, callback: (eventParams: any) => void, value?: string) => InputDevice;
    clearInputs: () => InputDevice;
}

export interface Input {
    device: string;
    value?: any;
    event: string;
    action: string;
    params?: any;
}

export interface InputAction {
    deviceId: string;
    eventParams: any;
    inputParams: any;
}

export interface InputSystem {
    init(config: InputSystemConfig): void;
    initDevice(type: string): InputSystem;
    activateAllDevices(): InputSystem;
    releaseAllDevices(): InputSystem;
    registerInputDevice(type: string, inputDevice: InputDevice): InputSystem;
    addInput(input: Input): InputSystem;
    addInputs(inputs: Input[]): InputSystem;
    clearInputs(): InputSystem;
    handleActions(callback: (key: string, inputParams: InputAction) => void): InputSystem;
    clearActions(): InputSystem;
}

export interface InputDeviceConfig {
    value: InputDevice;
    active: boolean;
}

export interface InputSystemConfig {
    inputDevices: {[id: string]: InputDeviceConfig};
}

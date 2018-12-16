import { Input, InputAction, InputDevice, InputSystem, InputSystemConfig } from './input-system.types';
export declare class InputSystemDefault implements InputSystem {
    private actions;
    private config;
    constructor();
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

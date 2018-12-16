import { InputDevice } from '../../input-system.types';
export declare enum KeyboardEventType {
    KEY_UP = "keyup",
    KEY_DOWN = "keydown",
    KEY_TOGGLE = "keytoggle"
}
export declare class KeyboardDevice implements InputDevice {
    static readonly type = "keyboard";
    private keyboardService;
    constructor();
    init(): KeyboardDevice;
    activate(): KeyboardDevice;
    addInput(event: string, callback: (eventParams: any) => void, value?: string): KeyboardDevice;
    clearInputs(): KeyboardDevice;
    release(): KeyboardDevice;
}

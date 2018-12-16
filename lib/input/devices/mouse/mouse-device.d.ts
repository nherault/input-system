import { InputDevice } from '../../input-system.types';
export declare enum MouseEventType {
    MOUSE_CLICK = "click",
    MOUSE_DOWN = "mousedown",
    MOUSE_UP = "mouseup",
    MOUSE_ENTER = "mouseenter",
    MOUSE_LEAVE = "mouseleave",
    MOUSE_MOVE = "mousemove",
    MOUSE_OVER = "mouseover",
    MOUSE_OUT = "mouseout",
    WHEEL = "wheel"
}
export declare class MouseDevice implements InputDevice {
    static readonly type = "mouse";
    private mouseService;
    constructor();
    init(): MouseDevice;
    activate(): MouseDevice;
    addInput(event: string, callback: (eventParams: any) => void): MouseDevice;
    clearInputs(): MouseDevice;
    release(): MouseDevice;
}

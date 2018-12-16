export interface MouseInfo {
    altKey: boolean;
    crtlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    button: boolean;
    buttons: boolean;
    clientX: boolean;
    clientY: boolean;
    movementX: boolean;
    movementY: boolean;
}
export declare class MouseService {
    private mouseInfo;
    private mouseEvent;
    private onMouseEventListenerBind;
    constructor();
    getMouseInfo(): MouseEvent | undefined;
    activate(): MouseService;
    addMouseEvent(mouseEventKey: string, callback: (eventParams: any) => void): MouseService;
    removeMouseEvent(mouseEventKey: string): MouseService;
    resetAllMouseEvents(): MouseService;
    release(): MouseService;
    private onMouseEventListener;
}

export enum MouseEventType {
    MOUSE_CLICK = 'click',
    MOUSE_DBLCLICK = 'dblclick',
    MOUSE_DOWN = 'mousedown',
    MOUSE_UP = 'mouseup',
    MOUSE_MOVE = 'mousemove',
    WHEEL = 'wheel',
    CONTEXT_MENU = 'contextmenu',
}

// See: https://developer.mozilla.org/en-US/docs/Web/Events/click
export interface MouseInfo {
    altKey: boolean;
    crtlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    movementX: number;
    movementY: number;
    wheelDeltaX?: number;
    wheelDeltaY?: number;
    wheelDeltaZ?: number;
    wheelDeltaMode?: number;
}

// Do LeftClick / RightClick / MiddleClick...etc

export class MouseService {

    private mouseInfo: MouseInfo | undefined;
    private mouseEvent: {[key: string]: ((event: MouseInfo) => void) | undefined};

    // TODO: TOUCH EVENTS (new class)
    // touchcancel
    // touchend
    // touchmove
    // touchstart

    private onMouseEventListenerBind: (event: MouseEvent) => void;

    constructor() {
        this.mouseEvent = {};
        this.onMouseEventListenerBind = this.onMouseEventListener.bind(this);
    }

    public getMouseInfo(): MouseInfo | undefined {
        return this.mouseInfo;
    }

    public activate(): MouseService {
        window.addEventListener(MouseEventType.MOUSE_CLICK, this.onMouseEventListenerBind, true);
        window.addEventListener(MouseEventType.MOUSE_DBLCLICK, this.onMouseEventListenerBind, true);
        window.addEventListener(MouseEventType.MOUSE_DOWN, this.onMouseEventListenerBind, true);
        window.addEventListener(MouseEventType.MOUSE_UP, this.onMouseEventListenerBind, true);
        window.addEventListener(MouseEventType.MOUSE_MOVE, this.onMouseEventListenerBind, true);
        window.addEventListener(MouseEventType.WHEEL, this.onMouseEventListenerBind, true);
        window.addEventListener(MouseEventType.CONTEXT_MENU, this.onMouseEventListenerBind, true);
        return this;
    }

    public addMouseEvent(mouseEventKey: string, callback: (eventParams: any) => void): MouseService {
        this.mouseEvent[mouseEventKey] = callback;
        return this;
    }

    public removeMouseEvent(mouseEventKey: string): MouseService {
        this.mouseEvent[mouseEventKey] = undefined;
        return this;
    }

    public resetAllMouseEvents(): MouseService {
        this.mouseEvent = {};
        return this;
    }

    public release(): MouseService {
        window.removeEventListener(MouseEventType.MOUSE_CLICK, this.onMouseEventListenerBind, true);
        window.removeEventListener(MouseEventType.MOUSE_DBLCLICK, this.onMouseEventListenerBind, true);
        window.removeEventListener(MouseEventType.MOUSE_DOWN, this.onMouseEventListenerBind, true);
        window.removeEventListener(MouseEventType.MOUSE_UP, this.onMouseEventListenerBind, true);
        window.removeEventListener(MouseEventType.MOUSE_MOVE, this.onMouseEventListenerBind, true);
        window.removeEventListener(MouseEventType.WHEEL, this.onMouseEventListenerBind, true);
        window.removeEventListener(MouseEventType.CONTEXT_MENU, this.onMouseEventListenerBind, true);
        return this;
    }

    private onMouseEventListener(event: MouseEvent | WheelEvent): void {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        const mouseClickFct = this.mouseEvent[event.type];
        if (mouseClickFct !== undefined) {
            this.mouseInfo = {
                altKey: event.altKey,
                button: event.button,
                buttons: event.buttons,
                clientX: event.clientX,
                clientY: event.clientY,
                crtlKey: event.ctrlKey,
                metaKey: event.metaKey,
                movementX: event.movementX,
                movementY: event.movementY,
                shiftKey: event.shiftKey,
                wheelDeltaMode: (event as WheelEvent).deltaMode,
                wheelDeltaX: (event as WheelEvent).deltaX,
                wheelDeltaY: (event as WheelEvent).deltaY,
                wheelDeltaZ: (event as WheelEvent).deltaZ,
            };
            mouseClickFct(this.mouseInfo);

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
    }
}

import { KeyboardEventType } from './keyboard-device';

export class KeyboardService {

    private keyDowns: any;
    private keyUps: any;
    private keyToggles: any;

    private keyDownListenerBind: (event: KeyboardEvent) => void;
    private keyUpListenerBind: (event: KeyboardEvent) => void;

    constructor() {
        this.keyDowns = {};
        this.keyUps = {};
        this.keyToggles = {};
        this.keyDownListenerBind = this.keyDownListener.bind(this);
        this.keyUpListenerBind = this.keyUpListener.bind(this);
    }

    public activate(): KeyboardService {
        window.addEventListener(KeyboardEventType.KEY_DOWN, this.keyDownListenerBind, true);
        window.addEventListener(KeyboardEventType.KEY_UP, this.keyUpListenerBind, true);
        return this;
    }

    public addKeyDown(key: string, callback: (eventParams: any) => void): KeyboardService {
        this.keyDowns[key] = callback;
        return this;
    }

    public addKeyUp(key: string, callback: (eventParams: any) => void): KeyboardService {
        this.keyUps[key] = callback;
        return this;
    }

    public addKeyToggle(key: string, callback: (isDown: boolean) => void): KeyboardService {
        this.keyToggles[key] = callback;
        return this;
    }

    public removeKeyDown(key: string): KeyboardService {
        this.keyDowns[key] = undefined;
        return this;
    }

    public removeKeyUp(key: string): KeyboardService {
        this.keyUps[key] = undefined;
        return this;
    }

    public removeKeyToggle(key: string): KeyboardService {
        this.keyToggles[key] = undefined;
        return this;
    }

    public resetKeyDowns(): KeyboardService {
        this.keyDowns = {};
        return this;
    }

    public resetKeyUps(): KeyboardService {
        this.keyDowns = {};
        return this;
    }

    public resetKeyToggles(): KeyboardService {
        this.keyToggles = {};
        return this;
    }

    public resetAllKeys(): KeyboardService {
        this.resetKeyDowns();
        this.resetKeyUps();
        this.resetKeyToggles();
        return this;
    }

    public release(): KeyboardService {
        window.removeEventListener(KeyboardEventType.KEY_DOWN, this.keyDownListenerBind, true);
        window.removeEventListener(KeyboardEventType.KEY_UP, this.keyUpListenerBind, true);
        return this;
    }

    private keyDownListener(event: KeyboardEvent): void {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        if (this.keyDowns[event.key]) {
            this.keyDowns[event.key]();

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }

        if (this.keyToggles[event.key]) {
            this.keyToggles[event.key](true);

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
    }

    private keyUpListener(event: KeyboardEvent): void {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        if (this.keyUps[event.key]) {
            this.keyUps[event.key]();

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }

        if (this.keyToggles[event.key]) {
            this.keyToggles[event.key](false);

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
    }
}

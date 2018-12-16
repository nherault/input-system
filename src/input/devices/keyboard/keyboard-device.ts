import { InputDevice } from '../../input-system.types';
import { KeyboardService } from './keyboard.service';

export enum KeyboardEventType {
    KEY_UP = 'keyup',
    KEY_DOWN = 'keydown',
    KEY_TOGGLE = 'keytoggle',
}

export class KeyboardDevice implements InputDevice {

    public static readonly type = 'keyboard';
    private keyboardService: KeyboardService;

    constructor() {
        this.keyboardService = new KeyboardService();
    }

    public init(): KeyboardDevice {
        this.keyboardService.activate()
            .resetAllKeys();
        return this;
    }

    public activate(): KeyboardDevice {
        this.keyboardService.activate();
        return this;
    }

    public addInput(event: string, callback: (eventParams: any) => void, value?: string): KeyboardDevice {

        if (value) {
            event = event.toLowerCase();
            if (event === KeyboardEventType.KEY_UP) {
                this.keyboardService.addKeyUp(value, callback);
            } else if (event === KeyboardEventType.KEY_DOWN) {
                this.keyboardService.addKeyDown(value, callback);
            } else if (event === KeyboardEventType.KEY_TOGGLE) {
                this.keyboardService.addKeyToggle(value, callback);
            }
        }
        return this;
    }

    public clearInputs(): KeyboardDevice {
        this.keyboardService.resetAllKeys();
        return this;
    }

    public release(): KeyboardDevice {
        this.keyboardService.release();
        return this;
    }
}

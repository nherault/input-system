import { InputDevice } from '../../input-system.types';
import { MouseService } from './mouse.service';

export class MouseDevice implements InputDevice {

    public static readonly type = 'mouse';
    private mouseService: MouseService;

    constructor() {
        this.mouseService = new MouseService();
    }

    public init(): MouseDevice {
        this.mouseService.activate()
            .resetAllMouseEvents();
        return this;
    }

    public activate(): MouseDevice {
        this.mouseService.activate();
        return this;
    }

    // TODO: value at the end because optional?
    public addInput(event: string, callback: (eventParams: any) => void): MouseDevice {

        event = event.toLowerCase();
        this.mouseService.addMouseEvent(event, callback);
        return this;
    }

    public clearInputs(): MouseDevice {
        this.mouseService.resetAllMouseEvents();
        return this;
    }

    public release(): MouseDevice {
        this.mouseService.release();
        return this;
    }
}

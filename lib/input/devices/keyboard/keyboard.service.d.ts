export declare class KeyboardService {
    private keyDowns;
    private keyUps;
    private keyToogles;
    private keyDownListenerBind;
    private keyUpListenerBind;
    constructor();
    activate(): KeyboardService;
    addKeyDown(key: string, callback: (eventParams: any) => void): KeyboardService;
    addKeyUp(key: string, callback: (eventParams: any) => void): KeyboardService;
    addKeyToogle(key: string, callback: (isDown: boolean) => void): KeyboardService;
    removeKeyDown(key: string): KeyboardService;
    removeKeyUp(key: string): KeyboardService;
    removeKeyToogle(key: string): KeyboardService;
    resetKeyDowns(): KeyboardService;
    resetKeyUps(): KeyboardService;
    resetKeyToogles(): KeyboardService;
    resetAllKeys(): KeyboardService;
    release(): KeyboardService;
    private keyDownListener;
    private keyUpListener;
}

export interface KeyboardDirection {
    isUp: boolean;
    isDown: boolean;
    isLeft: boolean;
    isRight: boolean;
}
export declare class KeyboardHelper {
    static getDirection(keyboardDirection: KeyboardDirection): {
        x: number;
        y: number;
    };
}

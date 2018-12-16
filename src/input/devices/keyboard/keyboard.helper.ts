export interface KeyboardDirection {
    isUp: boolean;
    isDown: boolean;
    isLeft: boolean;
    isRight: boolean;
}

export class KeyboardHelper {
    public static getDirection(keyboardDirection: KeyboardDirection): {x: number, y: number} {
      let x: number;
      let y: number;
      if (keyboardDirection.isDown && keyboardDirection.isLeft) {
        x = -1;
        y = 1;
      } else if (keyboardDirection.isDown && keyboardDirection.isRight) {
        x = 1;
        y = 1;
      } else if (keyboardDirection.isUp && keyboardDirection.isLeft) {
        x = -1;
        y = -1;
      } else if (keyboardDirection.isUp && keyboardDirection.isRight) {
        x = 1;
        y = -1;
      } else if (keyboardDirection.isUp) {
        x = 0;
        y = -1;
      } else if (keyboardDirection.isDown) {
        x = 0;
        y = 1;
      } else if (keyboardDirection.isLeft) {
        x = -1;
        y = 0;
      } else if (keyboardDirection.isRight) {
        x = 1;
        y = 0;
      } else {
        x = 0;
        y = 0;
      }

      return {x, y};
    }
}

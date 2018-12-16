import { InputSystemDefault, KeyboardDevice, MouseDevice } from '../input';
const body: HTMLCollectionOf<HTMLElementTagNameMap['body']> = document.getElementsByTagName('body');

const DELAI = 750;
const inputs = [
    { device: 'keyboard', value: 'e', event: 'keydown', action: 'myAction e', params: 'params e' },
    { device: 'keyboard', value: 'a', event: 'keydown', action: 'myAction a', params: 'params a' },
    { device: 'keyboard', value: 'd', event: 'keydown', action: 'myAction d', params: 'params d' },
    { device: 'keyboard', value: 'q', event: 'keyup', action: 'myAction q', params: 'params q' },
    { device: 'keyboard', value: 'r', event: 'keytoggle', action: 'myAction r', params: 'params r' },
    { device: 'mouse', event: 'click', action: 'click action', params: 'click params' },
    { device: 'mouse', event: 'mousemove', action: 'mousemove action', params: 'mousemove params' },
    { device: 'mouse', event: 'dblclick', action: 'dblclick action', params: 'dblclick params' },
    { device: 'mouse', event: 'contextmenu', action: 'contextmenu action', params: 'contextmenu params' },
    { device: 'mouse', event: 'mouseup', action: 'mouseup action', params: 'mouseup params' },
    { device: 'mouse', event: 'mousedown', action: 'mousedown action', params: 'mousedown params' },
    { device: 'mouse', event: 'wheel', action: 'wheel action', params: 'wheel params' },
];

const inputSystem = new InputSystemDefault();
inputSystem.registerInputDevice(KeyboardDevice.type, new KeyboardDevice());
inputSystem.registerInputDevice(MouseDevice.type, new MouseDevice());
inputSystem.initDevice(KeyboardDevice.type);
inputSystem.initDevice(MouseDevice.type);
inputSystem.addInputs(inputs);
setInterval(() => {
    body[0].innerHTML = `DELAI: ${DELAI}<br />`;
    inputs.forEach((input) => {
        body[0].innerHTML += `${JSON.stringify(input)}<br />`;
    });
    body[0].innerHTML += '<br />Result:<br />';
    inputSystem
        .handleActions((actionKey, actionParams) => {
            body[0].innerHTML += `actionKey: ${actionKey} | actionParams: ${JSON.stringify(actionParams)}<br />`;
        })
        .clearActions();
}, DELAI);

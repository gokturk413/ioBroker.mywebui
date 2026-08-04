import { BaseCustomWebComponentConstructorAppend } from "@node-projects/base-custom-webcomponent";
export declare class SplitView extends BaseCustomWebComponentConstructorAppend {
    static readonly style: CSSStyleSheet;
    static readonly template: HTMLTemplateElement;
    orientation: 'horizontal' | 'vertical';
    observe: false;
    private _observer;
    private _primaryChild;
    private _secondaryChild;
    private _splitter;
    private _startSize;
    private _startX;
    private _startY;
    constructor();
    ready(): void;
    private _assignSlots;
    private _setFlexBasis;
    private _pointerDown;
    private _startResize;
    private _pointerUp;
    private _stopresize;
    private _pointerMove;
    private _onHandleMove;
}

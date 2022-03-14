import {makeAutoObservable} from "mobx"
import {size} from "../types/types";

class AppOptions {
    private _screenWidth: number = 0;
    private _mobile: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    get width(): number {
        return this._screenWidth;
    }

    set width(width: number) {
        this._screenWidth = width;
        this.defineMobility();
    }

    get isMobile(): boolean {
        return this._mobile;
    }

    defineMobility() {
        this._mobile = this._screenWidth <= Number(size.tablet);
    }
}

export default new AppOptions();
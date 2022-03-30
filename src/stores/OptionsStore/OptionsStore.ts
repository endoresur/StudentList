import {makeAutoObservable} from "mobx"
import { size } from "../../styles/mediaQueries";

class OptionsStore {
    private _screenWidth: number = 0;
    private _mobile: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    get getWidth(): number {
        return this._screenWidth;
    }

    set setWidth(width: number) {
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

export default new OptionsStore();
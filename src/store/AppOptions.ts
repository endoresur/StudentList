import {makeAutoObservable} from "mobx"
import {size} from "../types/types";

class AppOptions {
    private screenWidth: number = 0;
    private mobile: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    get width(): number {
        return this.screenWidth;
    }

    set width(width: number) {
        this.screenWidth = width;
        this.defineMobility();
    }

    get isMobile(): boolean {
        return this.mobile;
    }

    defineMobility() {
        this.mobile = this.screenWidth <= Number(size.mobileL);
    }
}

export default new AppOptions();
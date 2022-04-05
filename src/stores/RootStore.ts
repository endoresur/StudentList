import { makeAutoObservable } from "mobx"
import OptionsStore from "./OptionsStore";
import StudentsStore from "./StudentsStore";

export default class RootStore {
    studentsStore;
    optionsStore;

    constructor() {
        makeAutoObservable(this);
        this.studentsStore = new StudentsStore(this)
        this.optionsStore = new OptionsStore(this)
    }
}

export const rootStore = new RootStore()
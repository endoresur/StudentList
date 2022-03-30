import { makeAutoObservable } from "mobx"
import OptionsStore from "./OptionsStore";
import StudentsStore from "./StudentsStore";

class RootStore {
    students;
    options;

    constructor() {
        makeAutoObservable(this);
        this.students = StudentsStore;
        this.options = OptionsStore;        
    }
}

export default new RootStore();
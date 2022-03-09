import {makeAutoObservable} from "mobx";
import {IStudent} from "../types/types";
import {extract} from "../components/utilities/Extractor";

class StudentList {
    private list: IStudent[] = [];

    constructor() {
        makeAutoObservable(this);
        extract();
    }

    get getList(): IStudent[] {
        return this.list;
    }

    setList(list: IStudent[]) {
        this.list = list;
    }

}

export default new StudentList();
import {makeAutoObservable, configure} from "mobx";
import {IStudent} from "../types/types";
import {extract} from "../components/utilities/Extractor";

configure({
    useProxies: "never"
})

class StudentList {
    private list: IStudent[] = [];

    constructor() {
        makeAutoObservable(this);
        this.updateList();
    }

    private updateList() {
        extract();
    }

    get getList(): IStudent[] {
        return this.list;
    }

    set setList(list: IStudent[]) {
        this.list = list;
    }

    deleteStudent(student: IStudent) {
        let index = this.list.indexOf(student);
        this.list.splice(index, 1);
    }
}

export default new StudentList();
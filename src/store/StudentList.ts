import {makeAutoObservable, configure} from "mobx";
import {IStudent} from "../types/types";
import {extract} from "../components/utilities/Extractor";

configure({
    useProxies: "never"
})

class StudentList {
    private _list: IStudent[] = [];
    private _filteredList: IStudent[] = [];

    constructor() {
        makeAutoObservable(this);
        this.updateList();
    }

    private updateList() {
        extract();
    }

    get getList(): IStudent[] {
        return this._filteredList;
    }

    set setList(list: IStudent[]) {
        this._list = list;
        this._filteredList = this._list;
    }

    deleteStudent(student: IStudent) {
        let index = this._filteredList.indexOf(student);
        this._filteredList.splice(index, 1);
    }

    set filterOfList(value: string) {
        if (value.length === 0) {
            this._filteredList = this._list;
            return;
        }
        this._filteredList = this._list.filter(student => {
            return student.name.toLowerCase().includes(value.toLowerCase());
        })
    }

}

export default new StudentList();
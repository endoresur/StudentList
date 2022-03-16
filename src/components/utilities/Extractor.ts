import {IStudent} from "../../types/types";
import axios from "axios";
import StudentList from "../../store/StudentList";
import {fieldEdit} from "./FieldNormalizer";

const apiUrl = 'https://front-assignment-api.2tapp.cc/api/persons';

export const extract = () => {
    axios.get(apiUrl)
        .then((resp) => {
            let list: IStudent[] = resp.data.students;
            StudentList.setList = fieldEdit(list);
        });
}

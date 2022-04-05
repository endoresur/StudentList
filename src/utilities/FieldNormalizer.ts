import alphabet from "../constants/alphabet";
import specialty from "../constants/specialitions";
import { Student } from "../models/EntityModels/students";

export const listNormalize = (list: Student[]): Student[] => {
    return list.map((el) => {        
        return studentNormalize(el);
    });
}

export const studentNormalize = (el: Student): Student => {
    el.specialty = specialtyEdit(el.specialty);
    el.group = groupEdit(el.group);
    el.birthday = ageEdit(el.birthday);
    return el;
}

const specialtyEdit = (str: string): string => {
    if (str in specialty) {
        str = String(new Map(Object.entries(specialty)).get(str))
    }
    return str;
}

const groupEdit = (group: string): string => {
    let arr = group.split('');
    arr = arr.map((char) => {
        if (char in alphabet) {
            char = String(new Map(Object.entries(alphabet)).get(char));
        }
        return char;
    })
    group = arr.join('');
    return group;
}

const ageEdit = (date: string): string => {
    let arr = date.split('-').map((el) => { return Number(el) });
    let age = 0;
    let now = new Date();
    age = now.getFullYear() - arr[0] - 1;
    if (now.getMonth() < arr[1]) age++;
    if (now.getMonth() === arr[1] && now.getDay() < arr[2]) age++;

    return String(age);
}
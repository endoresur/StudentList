import {alphabet, IStudent, specialty} from "../../types/types";

export const fieldEdit = (list: IStudent[]): IStudent[] => {
    return list.map((el) => {
        el.specialty = specialtyEdit(el.specialty);
        el.group = groupEdit(el.group);
        el.birthday = ageEdit(el.birthday);
        return el;
    });
}

const specialtyEdit = (str: string): string => {
    if (specialty.has(str)) {
        str = String(specialty.get(str));
    }
    return str;
}

const groupEdit = (group: string): string => {
    let arr = group.split('');
    arr = arr.map((char) => {
        if(alphabet.has(char)) {
            char = String(alphabet.get(char));
        }
        return char;
    })
    group = arr.join('');
    return group;
}

const ageEdit = (date: string): string => {
    let arr = date.split('-').map((el) => {return Number(el)});
    let age = 0;
    let now = new Date();
    age = now.getFullYear() - arr[0] - 1;
    if (now.getMonth() < arr[1]) age++;
    if (now.getMonth() === arr[1] && now.getDay() < arr[2]) age++;

    return String(age);
}
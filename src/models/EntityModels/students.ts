import { ColorTypes } from "../../constants/colors"

export type Student = {
    id: number,
    email: string,
    name: string,
    sex: string,
    specialty: string,
    group: string,
    color: ColorTypes,
    rating: number,
    birthday: string,
    avatar: string,
}

export type Students = {
    students: Student[]
}

export interface IStudent {
    id: number,
    email: string,
    name: string,
    sex: string,
    specialty: string,
    group: string,
    color: string,
    rating: number,
    birthday: number,
    avatar: string,
}

export interface StudentProps {
    student: IStudent,
}
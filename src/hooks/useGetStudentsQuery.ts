import { useQuery } from "react-query"
import { getStudents } from "../api/students"
import { StudentResponseDTO } from "../models/ApiModels/students"
import { Students } from "../models/EntityModels/students"
import { studentNormalize } from "../utilities/FieldNormalizer"

const STUDENTS_LIST = 'students'

export const deserialize = (studentsResponse: StudentResponseDTO): Students => ({
    students: studentsResponse.data.students.map((student) => { return studentNormalize(student)})
})

export const useGetStudentsQuery = () => 
    useQuery(STUDENTS_LIST, () => getStudents(), {        
        select: queryData => deserialize(queryData)
    })


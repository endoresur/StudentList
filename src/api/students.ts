import { http } from "../services/httpClient"
import { Students } from "../models/EntityModels/students"
import { StudentResponseDTO } from "../models/ApiModels/students"

export const getStudents = () => http.get<Students, StudentResponseDTO>('/persons')
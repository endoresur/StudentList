import { http } from "../services/httpClient"
import { Students } from "../models/EntityModels/students"

export const getStudents = () => http.get('/persons')
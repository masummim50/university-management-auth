import ApiError from '../../../errors/ApiError'
import { ISemester, semesterMapper } from './semester.interface'
import { Semester } from './semester.model'
import httpStatus from 'http-status'

const createSemester = async (
  payload: ISemester
): Promise<ISemester | null> => {
  if (semesterMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Semester code inavalid')
  }

  const result = await Semester.create(payload)
  return result
}

const getAllSemester = async (
  pagination: object
): Promise<ISemester[] | null> => {
  const result = await Semester.find(pagination)
  return result
}

export const semesterServices = {
  createSemester,
  getAllSemester,
}

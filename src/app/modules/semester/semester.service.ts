import { ISemester } from './semester.interface'
import { Semester } from './semester.model'

const createSemester = async (
  payload: ISemester
): Promise<ISemester | null> => {
  const result = await Semester.create(payload)
  return result
}

export const semesterServices = {
  createSemester,
}

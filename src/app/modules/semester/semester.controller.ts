import { NextFunction, Request, Response } from 'express'
import { semesterServices } from './semester.service'
import { sendResponse } from '../../../shared/sendResponse'
import { pick } from './semester.utils'

const createSemesterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate request using zod
    const data = req.body
    const result = await semesterServices.createSemester(data)

    sendResponse(res, 200, 'Semester created Successfully', result)
    // res.status(200).json({
    //   success: true,
    //   message: 'Semester created Successfully',
    //   data: result,
    // })
  } catch (error) {
    next(error)
  }
}

const getSemesterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pagination = pick(req.query, ['page', 'limit', 'sortBy'])
    // work on sorting through the query here:

    const data = await semesterServices.getAllSemester(pagination)

    sendResponse(res, 200, 'data', data)
  } catch (error) {
    next(error)
  }
}

export const semesterController = {
  createSemesterController,
  getSemesterController,
}

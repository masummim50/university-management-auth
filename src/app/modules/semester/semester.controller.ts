import { NextFunction, Request, Response } from 'express'
import { semesterServices } from './semester.service'

const createSemesterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate request using zod
    const data = req.body
    const result = await semesterServices.createSemester(data)

    res.status(200).json({
      success: true,
      message: 'User created Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const semesterController = {
  createSemesterController,
}

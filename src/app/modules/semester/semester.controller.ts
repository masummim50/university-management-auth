import { NextFunction, Request, Response } from 'express'

const createSemesterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate request using zod

    res.status(200).json({
      success: true,
      message: 'User created Successfully',
      data: undefined,
    })
  } catch (error) {
    next(error)
  }
}

export const semesterController = {
  createSemesterController,
}

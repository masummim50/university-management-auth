import { NextFunction, Request, Response } from 'express'
import userService from './user.service'

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate request using zod

    const user = req.body
    const createdUser = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created Successfully',
      data: createdUser,
    })
  } catch (error) {
    next(error)
  }
}

export default {
  createUserController,
}

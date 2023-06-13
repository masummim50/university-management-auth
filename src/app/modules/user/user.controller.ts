import { NextFunction, Request, Response } from 'express'
import userService from './user.service'
import { sendResponse } from '../../../shared/sendResponse'

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body
    const createdUser = await userService.createUser(user)
    sendResponse(res, 200, 'User created Successfully', createdUser)
    // res.status(200).json({
    //   success: true,
    //   message: 'User created Successfully',
    //   data: createdUser,
    // })
  } catch (error) {
    next(error)
  }
}

export default {
  createUserController,
}

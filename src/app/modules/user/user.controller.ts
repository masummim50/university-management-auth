import { Request, Response } from 'express'
import userService from './user.service'

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const createdUser = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created Successfully',
      data: createdUser,
    })
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: 'User creation failed',
      error: error?.message,
    })
  }
}

export default {
  createUserController,
}

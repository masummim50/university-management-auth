import config from '../../../config'
import { IUser } from './user.interface'
import { UserModel } from './user.model'
import { generateId } from './user.utils'
import ApiError from './../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  user.id = await generateId()
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const newUser = await UserModel.create(user)
  if (!newUser) {
    throw new ApiError(400, 'user creation failed new api error')
  }
  return newUser
}

export default {
  createUser,
}

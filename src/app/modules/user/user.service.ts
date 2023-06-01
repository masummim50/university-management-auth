import config from '../../../config'
import { IUser } from './user.interface'
import { UserModel } from './user.model'
import { generateId } from './user.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  try {
    // auto generate incremental id
    user.id = await generateId()
    if (!user.password) {
      user.password = config.default_user_password as string
    }
    const newUser = await UserModel.create(user)
    return newUser
  } catch (error) {
    throw new Error('User creation failed')
  }
}

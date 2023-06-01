import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
})

type UserModel = Model<IUser, object>

export const UserModel = model<IUser, UserModel>('User', userSchema)
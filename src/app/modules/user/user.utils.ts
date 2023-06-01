import { UserModel } from './user.model'

const findLastId = async (): Promise<number> => {
  const idObject = await UserModel.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  const id = idObject ? parseInt(idObject.id) : 0
  return id
}

export const generateId = async (): Promise<string> => {
  const newId = (await findLastId()) + 1
  const id = newId.toString().padStart(8, '0')
  return id
}

import Express, { Router } from 'express'
import userController from './user.controller'
import { requestValidation } from '../../middlewares/validateRequest'
import { userZodValidation } from './user.zodvalidation'

const router: Router = Express.Router()

router.post(
  '/create-user',
  requestValidation.validateRequest(userZodValidation.createUserZodSchema),
  userController.createUserController
)

export const UserRouter = router

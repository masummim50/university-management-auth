import Express, { Router } from 'express'
import userController from './user.controller'

const router: Router = Express.Router()

router.post('/create-user', userController.createUserController)

export default {
  UserRouter: router,
}

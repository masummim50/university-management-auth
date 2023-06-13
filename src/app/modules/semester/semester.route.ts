import Express, { Router } from 'express'
import { requestValidation } from '../../middlewares/validateRequest'
import { semesterZodValidation } from './semester.zodValidations'
import { semesterController } from './semester.controller'

const router: Router = Express.Router()

router.post(
  '/create-semester',
  requestValidation.validateRequest(
    semesterZodValidation.createSemesterZodSchema
  ),
  semesterController.createSemesterController
)

export default {
  SemesterRouter: router,
}

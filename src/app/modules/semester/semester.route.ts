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

router.get('/', semesterController.getSemesterController)

export const SemesterRouter = router

import Express, { Router } from 'express'
import { UserRouter } from '../modules/user/user.route'
import { SemesterRouter } from '../modules/semester/semester.route'

const router: Router = Express.Router()

router.use('/user', UserRouter)
router.use('/semester', SemesterRouter)

export const Routes = router

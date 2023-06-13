import express, { Application } from 'express'
import cors from 'cors'
import { UserRouter } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { SemesterRouter } from './app/modules/semester/semester.route'
export const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use routes
app.use('/api/v1/user', UserRouter)
app.use('/api/v1/semester', SemesterRouter)

// testing error class
// testing
// app.get('/', (req: Request, res: Response) => {
//   Promise.reject(error => 'unhandle rejection error')
//   // res.send('App Home Page')
// })

// class customError extends Error {
//   statusCode: number
//   constructor(statusCode: number, message: string, stack = '') {
//     super(message)
//     this.statusCode = statusCode
//     this.message = message
//     if (stack) {
//       this.stack = stack
//     } else {
//       Error.captureStackTrace(this, this.constructor)
//     }
//   }
// }

// app.get('/error', (req, res, next) => {
//   throw new customError(300, 'custom error with 300')
// })

// global error handler
app.use(globalErrorHandler)

import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { Routes } from './app/routes'
import status from 'http-status'

export const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// All Routes

app.use('/api/v1/', Routes)
// testing error class
// testing
app.get('/', (req: Request, res: Response) => {
  res.status(200).json('App Home Page')
})

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

app.use((req, res) => {
  console.log('last one running')
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    messages: [
      {
        path: req.url,
        message: 'not found',
      },
    ],
  })
})

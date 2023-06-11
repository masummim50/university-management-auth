import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import { handleValidationError } from '../../errors/handleValidationError'
import ApiError from '../../errors/ApiError'
import { ZodError } from 'zod'
import { handleZodError } from '../../errors/handleZodError'

type IGenericErrorMessage = {
  name: string
  message: string
}

const globalErrorHandler = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // this is where you prepare the structure of the error to send the response
  // res.send({ myerror: error })
  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ZodError) {
    console.log('zod error')
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof Error) {
    message = 'Internal Server Error'
    errorMessages = [
      {
        name: error?.message,
        message: error?.message,
      },
    ]
  } else if (error instanceof ApiError) {
    message = 'Internal Server Error'
    errorMessages = [
      {
        name: error?.message,
        message: error?.message,
      },
    ]
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env !== 'production' ? error?.stack : undefined,
  })
  next()
}

export default globalErrorHandler

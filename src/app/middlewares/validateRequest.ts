import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const validateRequest = (zodSchema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await zodSchema.parseAsync({
        body: req.body,
      })
      return next()
    } catch (error) {
      next(error)
    }
  }
}

export const requestValidation = {
  validateRequest,
}

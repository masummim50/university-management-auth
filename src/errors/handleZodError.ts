import { ZodError, ZodIssue } from 'zod'

export const handleZodError = (error: ZodError) => {
  const errors = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })
  const validationError = {
    statusCode: 400,
    message: 'zod Validation Failed',
    errorMessages: errors,
  }
  return validationError
}

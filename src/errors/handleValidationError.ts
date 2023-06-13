import mongoose from 'mongoose'

export const handleValidationError = (
  error: mongoose.Error.ValidationError
) => {
  const errors = Object.values(error.errors).map(el => {
    return {
      path: el?.path,
      message: el?.message,
    }
  })
  const validationError = {
    statusCode: 400,
    message: 'Validation Failed',
    errorMessages: errors,
  }
  return validationError
}

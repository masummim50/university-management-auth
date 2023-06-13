import { Response } from 'express'

type IApiResponse<T> = {
  statusCode: number
  success: boolean
  message?: string
  data?: T | null
}

export const sendResponse = <DATATYPE>(
  res: Response,
  code: number,
  message: string,
  data: DATATYPE | null
) => {
  const responseObject: IApiResponse<DATATYPE> = {
    statusCode: code,
    success: true,
    message: message,
    data: data,
  }
  res.status(code).json(responseObject)
}

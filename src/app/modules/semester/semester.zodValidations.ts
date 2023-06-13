import { z } from 'zod'
import { months } from './semester.interface'

const createSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall'], {
      required_error: 'title must be one of those',
    }),
    year: z.number(),
    code: z.enum(['01', '02', '03']),
    startMonth: z.enum(months),
    endMonth: z.enum(months),
  }),
})

export const semesterZodValidation = {
  createSemesterZodSchema,
}

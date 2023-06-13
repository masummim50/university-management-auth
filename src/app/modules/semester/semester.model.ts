import { model, Schema } from 'mongoose'
import { ISemester, months } from './semester.interface'

// 2. Create a Schema corresponding to the document interface.
const semesterSchema = new Schema<ISemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ['Autumn', 'Summer', 'Fall'],
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ['01', '02', '03'],
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  }
)

// 3. Create a Model.
export const Semester = model<ISemester>('Semester', semesterSchema)

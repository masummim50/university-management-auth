// 1. Create an interface representing a document in MongoDB.
export type ISemester = {
  title: 'Autumn' | 'Summer' | 'Fall'
  year: number
  code: '01' | '02' | '03'
  startMonth: Month
  endMonth: Month
}

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

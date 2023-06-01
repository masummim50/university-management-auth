import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/user/user.route'
export const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use routes
app.use('/api/v1/user', userRoute.UserRouter)

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('App Home Page')
})

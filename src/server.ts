import config from './config/index'
import mongoose from 'mongoose'
import { app } from './app'
import { errorLogger, logger } from './shared/logger'
const port = 5000
import { Server } from 'http'

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connected')
    server = app.listen(port, () => {
      logger.info(`Application running on port ${port}`)
    })
  } catch (error) {
    errorLogger.error(error)
  }
}

bootstrap()

process.on('unhandledRejection', error => {
  console.log('unhandle rejection error')
  if (server) {
    server.close(() => {
      errorLogger.error(error)
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
})

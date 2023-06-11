import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
  node_env: process.env.NODE_ENV,
}

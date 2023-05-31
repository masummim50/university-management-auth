
import config from "./config/index"
import mongoose from "mongoose"
import { app } from "./app";
const port = 5000

async function bootstrap() {
    try{
        await mongoose.connect(config.database_url as string);
        console.log('database connected')
        app.listen(port, () => {
            console.log(`Application running on port ${port}`)
          })
    }catch(error){
        console.log(error)
    }

}

bootstrap()
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express, { Request, Response } from "express"
import Route from "./routes"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000

    app.use(express.json())
    app.use('/api', Route)
    
    app.get('/',(req: Request, res: Response) => (
        res.status(200).json({data:"Get Data Success"})
    ))

    app.listen(port, ()=> console.log(`Server running on port ${port}`))

}).catch(error => console.log(error))

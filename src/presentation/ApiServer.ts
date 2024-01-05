import express from "express";
import { CreateLogbookController } from "./controllers/createLogbookController";

export class ApiServer{
    public static async run(port : number, controller : CreateLogbookController) : Promise <void>{

        const app = express();
        app.use(express.json());

        app.post('/logbooks',(req,res) => controller.handle(req, res))

        app.listen(port, () => console.log(`Server is running on port ${port}`))
    }
}
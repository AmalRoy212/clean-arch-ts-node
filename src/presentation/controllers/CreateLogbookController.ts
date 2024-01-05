import { Request, Response } from "express";
import { CreateLogBookUseCase } from "../../application/CreateLogBookUseCase";


// export class CreatedLogbookDto implements ICreateLogBookResult{

//     public readonly logbookId : string

// }


export class CreateLogbookController{

    public constructor(private readonly _usecase : CreateLogBookUseCase){

    }

    public async handle(req : Request, res : Response) : Promise <void>{

        const userId = "userIdFake";

        const response = await this._usecase.execute({
            name : req.body.name,
            userId 
        })

        res.status(201).json({id : response.logbookId})

    }
}
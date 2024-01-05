import { LogBook } from '../domain/Logbook';
import { ILogBookRepository } from './ILogBookRepository'

interface ICreateLogBookDto{
    name : string
    userId : string

}

interface ICreateLogBookResult{
    logbookId : string
}




export class CreateLogBookUseCase{

    public constructor(private readonly _logbookrepo : ILogBookRepository){

    }

    public async execute(input : ICreateLogBookDto) : Promise <ICreateLogBookResult>{

        const logBook = new LogBook(input.name, input.userId);

        const result = await this._logbookrepo.save(logBook);

        if(!result){
            throw new Error("Couldnt save the logbook")
        }

        return {
            logbookId : logBook.id
        }

    }
}
import { ILogBookRepository } from "../application/ILogBookRepository";
import { LogBook } from "../domain/Logbook";

export class InMemoryLogBookRepository implements ILogBookRepository{

    private readonly _logbooks : LogBook [] = [];

    public async save(logbook: LogBook): Promise<Boolean> {
        this._logbooks.push(logbook);
        return true
    }

}
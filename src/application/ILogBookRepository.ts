import { LogBook } from '../domain/Logbook';

export interface ILogBookRepository{
    save(logbook : LogBook) : Promise <Boolean>
}
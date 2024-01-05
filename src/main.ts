import { CreateLogBookUseCase } from './application/CreateLogBookUseCase';
import { InMemoryLogBookRepository } from './infrastruture/inMemoryLogBookRepository';
import { ApiServer } from './presentation/ApiServer';
import { CreateLogbookController } from './presentation/controllers/createLogbookController';

export async function main() : Promise <void> {

    const inMemoryRepo = new InMemoryLogBookRepository();
    const useCase = new CreateLogBookUseCase(inMemoryRepo);
    const controller = new CreateLogbookController(useCase);

    await ApiServer.run(5000, controller);
}

main();
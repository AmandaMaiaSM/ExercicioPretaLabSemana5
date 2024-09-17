import { Repository } from '../../infrastructure/database/repository';
import { CreateBookUseCase } from '../../application/use-cases/create-book-use-case';
import { IdentifierGenerator } from './id-generator';
import { BookController } from './id-generator';
import { ListAllBooksUseCase } from '../../application/use-cases/list-all-books-use-case';
import {UpdateBookUseCase}  from '../../application/use-cases/up-date-books-use-case';

export function configureDependencies() {
 //seu codigo aqui
 const bookRepository = new Repository();
 const idGererator = new IdentifierGenerator();
 const createBookUseCase = new CreateBookUseCase(bookRepository, idGererator);
 const listAllBooksUseCase = new ListAllBooksUseCase(bookRepository);
 const updateBookUseCase = new UpdateBookUseCase(bookRepository);
 const bookController = new BookController(createBookUseCase, listAllBooksUseCase, updateBookUseCase);

 return {
    bookController
 }
} 
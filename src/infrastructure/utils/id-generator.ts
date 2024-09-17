import { IdGenerator } from '../../application/repositories/id-generator-interface';
import { v4 as uuid } from 'uuid';
import { CreateBookUseCase } from '../../application/use-cases/create-book-use-case';
import { ListAllBooksUseCase } from '../../application/use-cases/list-all-books-use-case';
import { BookDTO } from '../../interface/book-controller';
import { UpdateBookUseCase } from '../../application/use-cases/up-date-books-use-case';
import { Request, Response } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class IdentifierGenerator implements IdGenerator {
  //retornar uma instancia 
  generate(): string {
    return uuid();
  }
}

export class BookController {
  updatePostEdit(req: Request<{ id: string; }, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>): void {
    throw new Error('Method not implemented.');
  }
  //seu codigo aqui
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private listAllBooksUseCase: ListAllBooksUseCase,
    private updateBookUseCase: UpdateBookUseCase,
  ) { }
  create(req: Request, res: Response) {
    const bookDTO: BookDTO = req.body;
    const book = this.createBookUseCase.execute(bookDTO);
    res.status(201).json(book);
  }

  listAll(req: Request, res: Response) {
    const books = this.listAllBooksUseCase.execute();
    res.json(books);
  }

  upDateBookUseCase(req: Request, res: Response) {
    const { id } = req.params;
    const bookDTO = req.body;
    const updatedBook = this.updateBookUseCase.execute(id, bookDTO);

    if (!updatedBook) {
      return res.status(404).json({ message: 'Livro não encontrado' });

    }else {
      res.status(404).json({ message: "Livro não encontrado" });
    }
  }

}

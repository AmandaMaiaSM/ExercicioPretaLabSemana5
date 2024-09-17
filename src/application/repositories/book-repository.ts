import { Book } from '../../domain/book';

export interface BookRepository {
 //seu codigo aqui -recla do
 save (book: Book): void;
 findAll():Book[];
 update(book: Book): void;
 fidById (id: string): Book | undefined;
}
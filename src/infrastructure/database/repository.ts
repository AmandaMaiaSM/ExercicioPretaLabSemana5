import { BookRepository } from '../../application/repositories/book-repository';
import { Book } from '../../domain/book';


export class Repository implements BookRepository {
  
  fidById(id: string): Book | undefined {
    throw new Error('Method not implemented.');
  }
  
  private books: Book[] = [];

  save(book: Book): void {
    this.books.push(book)
  }
  findAll(): Book[]{
    return this.books;
  }
  
  update(book: Book): void {
    const index = this.books.findIndex(bookk => bookk.id === book.id );
    if(index ! == -1){
      this.books[index] = book;
    }
  }

  findById (id: string): Book | undefined{
    return this.books.find(book => book.id === id);
  }



}
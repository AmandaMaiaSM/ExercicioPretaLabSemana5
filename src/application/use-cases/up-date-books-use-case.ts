// up-date-books-use-case.ts
import { BookRepository } from "../repositories/book-repository";
import { Book } from "../../domain/book";

export class UpdateBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  execute(id: string, bookData: Partial<Book>): Book | null {
    const existingBook = this.bookRepository.fidById(id);

    if (!existingBook) {
      return null;
    }

    const updatedBook = {
      ...existingBook,
      ...bookData,
      id: existingBook.id, // Preserva o ID original
    };

    this.bookRepository.update(updatedBook);
    return updatedBook;
  }
}

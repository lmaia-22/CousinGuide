import bookService from '../services/bookService.ts';
import validateBook from '../models/validators/bookValidator.ts';

async function getBooks(req: any) {
  const books = await bookService.getBooks();
  return new Response(JSON.stringify(books), { status: 200 });
}

async function getBook(req: any) {
  const id = req.params.id;
  const book = await bookService.getBook(id);
  return new Response(JSON.stringify(book), { status: 200 });
}

async function createBook(req: any) {
  const data = await req.json();
  const validatedBook = validateBook(data);
  const newBook = await bookService.createBook(validatedBook);
  return new Response(JSON.stringify(newBook), { status: 201 });
}

async function updateBook(req: any) {
  const id = req.params.id;
  const data = await req.json();
  const validatedBook = validateBook(data);
  const updatedBook = await bookService.updateBook(id, validatedBook);
  return new Response(JSON.stringify(updatedBook), { status: 200 });
}

async function deleteBook(req: any) {
  const id = req.params.id;
  await bookService.deleteBook(id);
  return new Response(null, { status: 204 });
}

export default {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};

import bookModel from '../models/bookModel.js';

async function getBooks() {
  return await bookModel.findBooks();
}

async function getBook(id: string) {
  return await bookModel.findBook(id);
}

async function createBook(data: any) {
  return await bookModel.createBook(data);
}

async function updateBook(id: string, data: any) {
  return await bookModel.updateBook(id, data);
}

async function deleteBook(id: string) {
  return await bookModel.deleteBook(id);
}

export default {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};

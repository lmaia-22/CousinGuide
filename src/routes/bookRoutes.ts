import bookController from '../controllers/bookController.ts';
import Elysia from 'elysia';

const books = new Elysia()
.get('/books', bookController.getBooks)
.get('/books/:id', bookController.getBook)
.post('/books', bookController.createBook)
.put('/books/:id', bookController.updateBook)
.delete('/books/:id', bookController.deleteBook)

export default books;


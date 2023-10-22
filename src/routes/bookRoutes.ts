import { Router } from '@stricjs/router';
import bookController from '../controllers/bookController.js';

const router = new Router();


router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBook);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

export default router;



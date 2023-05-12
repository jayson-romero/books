import  express  from "express";
import { getPosts, getBooks, addBooks, deleteBook, updatedBook } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/books', getBooks);
router.post('/books', addBooks)
router.delete('/books/:id', deleteBook)
router.put('/books/:id', updatedBook)


export default router;

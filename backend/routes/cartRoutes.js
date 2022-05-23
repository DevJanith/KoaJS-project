import KoaRouter from 'koa-router';
import { create, deleteData, read, update } from "../controller/cartController.js";

const router = new KoaRouter();

router.get('/cart', read);
router.post('/cart', create);
router.put('/cart/:id', update);
router.delete('/cart/:id', deleteData);

export default router;
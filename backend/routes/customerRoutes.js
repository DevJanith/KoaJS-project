import KoaRouter from 'koa-router';
import { create, deleteData, read, update } from "../controller/customerController.js";

const router = new KoaRouter();

router.get('/customer', read);
router.post('/customer', create);
router.put('/customer/:id', update);
router.delete('/customer/:id', deleteData);

export default router;
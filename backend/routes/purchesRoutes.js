import KoaRouter from 'koa-router';
import { create, deleteData, read, update } from "../controller/purchesController.js";

const router = new KoaRouter();

router.get('/purchase', read);
router.post('/purchase', create);
router.put('/purchase/:id', update);
router.delete('/purchase/:id', deleteData);

export default router;
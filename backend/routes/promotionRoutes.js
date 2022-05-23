import KoaRouter from 'koa-router';
import { create, deleteData, read, update } from "../controller/promotionController.js";

const router = new KoaRouter();

router.get('/promotion', read);
router.post('/promotion', create);
router.put('/promotion/:id', update);
router.delete('/promotion/:id', deleteData);

export default router;
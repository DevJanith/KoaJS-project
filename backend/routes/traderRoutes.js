import KoaRouter from 'koa-router';
import { create, deleteData, read, update } from "../controller/traderController.js";

const router = new KoaRouter();

router.get('/trader', read);
router.post('/trader', create);
router.put('/trader/:id', update);
router.delete('/trader/:id', deleteData);

export default router;
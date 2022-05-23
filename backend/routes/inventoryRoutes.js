import KoaRouter from 'koa-router';
import { create, deleteData, read, update } from "../controller/inventoryController.js";

const router = new KoaRouter();

router.get('/inventory', read);
router.post('/inventory', create);
router.put('/inventory/:id', update);
router.delete('/inventory/:id', deleteData);

export default router;
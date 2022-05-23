import KoaRouter from 'koa-router';
import { create, deleteData, read, update } from "../controller/wishListController.js";

const router = new KoaRouter();

router.get('/wishList', read);
router.post('/wishList', create);
router.put('/wishList/:id', update);
router.delete('/wishList/:id', deleteData);

export default router;
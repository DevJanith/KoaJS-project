import KoaRouter from 'koa-router';
import { read, create, update, deleteData } from "../controller/userController.js";

const router = new KoaRouter();

router.get('/user', read);
router.post('/user', create);
router.put('/user/update', update);
router.delete('/user/delete', deleteData);

export default router;
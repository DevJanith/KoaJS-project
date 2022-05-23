import KoaRouter from 'koa-router';
import { read, create } from "../controller/bookContoller.js";

const router = new KoaRouter();

router.get('/book', read);
router.post('/book', create);
// router.put('/update', update);
// router.delete('/delete', deleteData);

export default router;
import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import koaCors from 'koa-cors';

import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import promotionRoutes from "./routes/promotionRoutes.js";
import purchesRoutes from "./routes/purchesRoutes.js";
import traderRoutes from "./routes/traderRoutes.js";
import wishListRoutes from "./routes/wishListRoutes.js";

const port = 5000;
const app = new Koa();
const router = new KoaRouter();

//use as middlware
app.use(bodyParser());
app.use(koaCors())

app.use(bookRoutes.routes());
app.use(userRoutes.routes());
app.use(customerRoutes.routes());
app.use(cartRoutes.routes());
app.use(inventoryRoutes.routes());
app.use(promotionRoutes.routes());
app.use(purchesRoutes.routes());
app.use(traderRoutes.routes());
app.use(wishListRoutes.routes());

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => { console.log("Server is runig on : " + port) })


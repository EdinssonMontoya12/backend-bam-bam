import { Router } from "express";
import articulo from "./articulo"
import sucursal from "./sucursal"
import tercero from "./tercero"
import usuario from "./usuario"

const router = new Router();

router.use('/articulo', articulo);
router.use('/sucursal', sucursal);
router.use('/tercero', tercero);
router.use('/usuario', usuario);

export default router;

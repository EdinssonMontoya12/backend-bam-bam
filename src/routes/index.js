import { Router } from "express";
import articulo from "./articulo"
import sucursal from "./sucursal"
import tercero from "./tercero"
import usuario from "./usuario"
import lote from "./lote"
import grupoProducto from "./grupoProducto"
import empresaProv from "./empresaProv"

const router = new Router();

router.use('/articulo', articulo);
router.use('/sucursal', sucursal);
router.use('/tercero', tercero);
router.use('/usuario', usuario);
router.use('/lote', lote);
router.use('/grupoProduto', grupoProducto);
router.use('/empresaProv', empresaProv);

export default router;

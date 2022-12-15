import { Router } from "express";
import * as lote from "@controllers/lote";

const router = new Router();

router.get('/:sucid/:texto', lote.consultar); 
router.get('/:id', lote.obtenerUno);
router.post('/', lote.insertarUno);
router.put('/:id', lote.actualizarUno);

export default router;
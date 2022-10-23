import { Router } from "express";
import * as sucursal from "@controllers/sucursal";

const router = new Router();

router.get('/:sucid/:texto', sucursal.consultar);
router.get('/:id', sucursal.obtenerUno);
router.post('/', sucursal.insertarUno);
router.put('/:id', sucursal.actualizarUno);

export default router;
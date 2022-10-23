import { Router } from "express";
import * as tercero from "@controllers/tercero";

const router = new Router();

router.get('/:sucid/:texto', tercero.consultar);
router.get('/:id', tercero.obtenerUno);
router.post('/', tercero.insertarUno);
router.put('/:id', tercero.actualizarUno);
router.delete('/:id', tercero.eliminarUno);

export default router;
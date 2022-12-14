import { Router } from "express";
import * as articulo from "@controllers/articulo";

const router = new Router();

router.get('/:sucid/:texto/:activo', articulo.consultar); 
router.get('/:id', articulo.obtenerUno);
router.post('/', articulo.insertarUno);
router.put('/:id', articulo.actualizarUno);
router.put('/activar/:id', articulo.activar);
router.delete('/:id', articulo.eliminarUno);  

export default router;
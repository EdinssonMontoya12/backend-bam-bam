import { Router } from "express";
import * as articulo from "@controllers/articulo";

const router = new Router();

router.get('/:sucid/:texto', articulo.consultar); 
router.get('/:id', articulo.obtenerUno);
router.post('/', articulo.insertarUno);
router.put('/:id', articulo.actualizarUno);
router.delete('/:id', articulo.eliminarUno);  

export default router;
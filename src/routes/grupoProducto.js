import { Router } from "express";
import * as grupoProducto from "@controllers/grupoProducto";

const router = new Router();

router.get('/:sucid/:texto', grupoProducto.consultar); 
router.get('/:id', grupoProducto.obtenerUno);
router.post('/', grupoProducto.insertarUno);
router.put('/:id', grupoProducto.actualizarUno);
router.delete('/:id', grupoProducto.eliminarUno);  

export default router;
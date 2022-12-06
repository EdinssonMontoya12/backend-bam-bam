import { Router } from "express";
import * as factura from "@controllers/facturacion/factura";

const router = new Router();

router.get('/:sucid/:texto/:codfact', factura.consultar); 
router.get('/:id', factura.obtenerUno);
router.post('/', factura.insertarUno);
router.put('/:id', factura.actualizarUno);
router.delete('/:id', factura.eliminarUno);  
router.put('/asentar/venta', factura.asentarventa);
router.put('/asentar/compra', factura.asentarcompra);  

export default router;
import { Router } from "express";
import * as empresaProv from "@controllers/empresaProv";

const router = new Router();

router.get('/:sucid/:texto', empresaProv.consultar); 
router.get('/:id', empresaProv.obtenerUno);
router.post('/', empresaProv.insertarUno);
router.put('/:id', empresaProv.actualizarUno);
router.delete('/:id', empresaProv.eliminarUno);  

export default router;
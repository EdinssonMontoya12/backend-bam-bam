import { Router } from "express";
import * as usuario from "@controllers/usuario";

const router = new Router();

router.get('/:sucid/:texto', usuario.consultar);
router.get('/:id', usuario.obtenerUno);
router.post('/', usuario.insertarUno);
router.put('/:id', usuario.actualizarUno);
router.delete('/:id', usuario.eliminarUno);
router.get('/signin/:username/:contrasenia', usuario.iniciarSesion);

export default router;
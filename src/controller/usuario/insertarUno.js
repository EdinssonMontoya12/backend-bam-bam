import pool from '@database'
import encrypt from '@helpers/bycript'

export default async (req, res) => {

    try {

        const contrasenia = await encrypt.encriptar(req.body.contrasenia)

        const usuario = [
            req.body.username,
            contrasenia,
            req.body.radio1,
            req.body.nombre,
            req.body.apellido,
            req.body.telefono,
            1,
            req.body.sucursal,
            req.body.email
        ]

        const query = "CALL SUPER_INSERTAR_USUARIO(?,?,?,?,?,?,?,?,?)"

        const result = await pool.query(query, usuario)

        return res.json(result[0][0][0])

    } catch (err) {

        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el usuario",
            "err": err.message
        }

        console.log(data)

        return res.json(data)
    }

}
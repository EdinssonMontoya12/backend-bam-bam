import pool from '@database'
import encrypt from '@helpers/bycript'

export default async (req, res) => {

    try {

        var contrasenia = ''

        if(req.body.changepass == 1){
            contrasenia = await encrypt.encriptar(req.body.contrasenia)
        }

        const usuario = [
            req.params.id,
            req.body.username,
            contrasenia,
            req.body.radio1,
            req.body.nombre,
            req.body.apellido,
            req.body.telefono,
            req.body.sucursal.split('/')[0].trim(),
            req.body.email
        ]
        console.log(usuario)
        const query = "CALL SUPER_ACTUALIZAR_USUARIO(?,?,?,?,?,?,?,?,?)"

        const result = await pool.query(query, usuario)

        return res.json(result[0][0][0])

    } catch (err) {

        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el usuario",
            "err": err.message
        }
        console.log(data)
        return res.json(data)

    }

}
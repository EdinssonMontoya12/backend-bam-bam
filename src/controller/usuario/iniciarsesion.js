import pool from '@database'
import encrypt from '@helpers/bycript'

export default async (req, res) => {

    try {

        var data = null

        const query = 'CALL SUPER_CONSULTAR_USUARIOS(?)'
        var result = await pool.query(query, [req.params.username])
        result = result[0][0]

        if (result.length > 0) {
            if (await encrypt.compare(req.params.contrasenia, result[0].contrasenia)) {
                data = {
                    "OSUCCESS": 1,
                    "DATA": result[0]
                }
            } else {
                data = {
                    "OSUCCESS": 0,
                    "OMENSAJE": "Datos incorrectos"
                }
            }
        } else {
            data = {
                "OSUCCESS": 0,
                "OMENSAJE": "Datos incorrectos"
            }
        }

        return res.json(data)

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido iniciar sesion",
            "err": err.message
        }

        return res.json(data)
    }

}
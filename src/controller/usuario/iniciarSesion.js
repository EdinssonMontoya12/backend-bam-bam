import pool from '@database'

export default async (req, res) => {

    try {

        var data = null

        const query = 'CALL SUPER_CONSULTAR_USUARIOS(?)'
        var result = await pool.query(query, [req.params.username])
        result = result[0][0]

        if (result.length > 0) {
            if (result[0].contrasenia === req.params.contrasenia) {
                data = {
                    "OSUCCESS": 1,
                    "DATA": result[0]
                }
            } else {
                data = {
                    "OSUCCESS": 0,
                    "OMENSAJE": "Contraseña incorrecta"
                }
            }
        } else {
            data = {
                "OSUCCESS": 0,
                "OMENSAJE": "El usuario no existe"
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
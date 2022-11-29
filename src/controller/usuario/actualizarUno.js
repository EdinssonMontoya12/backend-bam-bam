import pool from '@database'

export default async (req, res) => {

    try {

        const usuario = [
            req.params.id,
            req.body.usuario,
            req.body.codrol,
            req.body.nombre
        ]

        const query = "CALL SUPER_ACTUALIZAR_USUARIO(?, ?, ?, ?)"

        const result = await pool.query(query, usuario)

        return res.json(result[0][0][0])

    } catch (err) {

        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el usuario",
            "err": err.message
        }

        return res.json(data())

    }

}
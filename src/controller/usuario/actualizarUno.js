import pool from '@database'

export default async (req, res) => {

    try {

        const usuario = [
            req.body.id,
            req.body.usuario,
            req.body.contasenia,
            req.body.codrol
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

    }

}
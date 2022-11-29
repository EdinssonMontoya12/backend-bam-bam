import pool from '@database'

export default async (req, res) => {

    try {

        const usuario = [
            req.body.usuario,
            req.body.contasenia,
            req.body.codrol,
            req.body.nombre
        ]

        console.log(usuario)

        const query = "CALL SUPER_INSERTAR_USUARIO(?, ?, ?, ?)"

        const result = await pool.query(query, usuario)

        return res.json(result[0][0][0])

    } catch (err) {

        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el usuario",
            "err": err.message
        }

        return res.json(data)
    }

}
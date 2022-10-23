import pool from '@database'

export default async (req, res) => {

    try {

        const sucursal = [
            req.body.codigo,
            req.body.nombre
        ]

        const query = "CALL SUPER_INSERTAR_SUCURSAL(?, ?)"

        const result = await pool.query(query, sucursal)

        return res.json(result[0][0][0])

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar la sucursal",
            "err": err.message
        }

        return res.json(data)
    }

}
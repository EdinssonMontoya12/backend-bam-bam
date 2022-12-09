import pool from '@database'

export default async (req, res) => {

    try {

        const detalles = req.body.detalles

        var contador = 0
        const query = "CALL SUPER_CANTIDAD_LOTE(?,?)"

        while (contador < detalles.length) {
            await pool.query(query, [(detalles[contador].cantidad), detalles[contador].loteid])
            contador++
        }

        return res.json({
            OSUCCESS: 1,
            OMENSAJE: "Se puede reversar"
        })

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido reversar la factura",
            "err": err.message
        }

        return res.json(data)
    }

}
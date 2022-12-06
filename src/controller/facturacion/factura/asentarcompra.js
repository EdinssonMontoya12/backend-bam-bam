import pool from '@database'

export default async (req, res) => {

    try {

        const detalles = req.body.detalles

        var contador = 0
        var sePuedeAsentar = true
        var lote = null

        while (contador < detalles.length) {
            const query = "CALL SUPER_CANTIDAD_LOTE(?,?)"
            const result = await pool.query(query, [(detalles[contador].cantidad), detalles[contador].loteid])
            contador++
        }

        return res.json({
            OSUCCESS: 1,
            OMENSAJE: "Se puede asentar"
        })

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido asentar la factura",
            "err": err.message
        }

        return res.json(data)
    }

}
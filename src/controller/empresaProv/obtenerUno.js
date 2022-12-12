import pool from '@database'

export default async (req, res) => {
    try {

        const { id } = req.params

        const query = "CALL SUPER_CONSULTAR_EMPRESAPRO(?)"

        const result = await pool.query(query, [id])
        const data = {
            "OSUCCESS": result[0][0].length > 0 ? 1 : 0,
            "DATA": result[0][0][0]
        }

        return res.json(data)

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido consultar el grupo de articulo",
            "err": err.message
        }
        console.log(data)
        return res.json(data)
    }
}
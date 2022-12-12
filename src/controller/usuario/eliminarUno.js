import pool from '@database'

export default async (req, res) => {

    try {

        const { id } = req.params

        console.log(id)

        const query = "CALL SUPER_DESACTIVAR_USUARIOS(?)"

        const result = await pool.query(query, [id])

        console.log(result)

        return res.json(result[0][0][0])

    } catch (err) {

        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido eliminar el usuario",
            "err": err.message
        }

        return res.json(data)
    }

}
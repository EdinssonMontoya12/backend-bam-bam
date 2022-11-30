import pool from '@database'

export default async (req, res) => {

    try {

        const lote = [
            req.params.id,
            req.body.codigo
        ]

        const query = "CALL SUPER_ACTUALIZAR_LOTE(?,?)"

        const result = pool.query(query, lote);

        return res.json(result[0][0][0])

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el lote",
            "err": err.message
        }

        return res.json(data)
    }
}
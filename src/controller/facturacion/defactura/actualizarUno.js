import pool from '@database'

export default async (req, res) => {

    try {

        const tercero = [
            req.params.id,
            req.body.codigogrup,
            req.body.descripcion
        ]

        const query = "CALL SUPER_ACTUALIZAR_GRUPOARTICULO(?,?,?)"

        const result = pool.query(query, tercero);

        return res.json(result[0][0][0])

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el grupo de articulo",
            "err": err.message
        }

        return res.json(data)
    }

}
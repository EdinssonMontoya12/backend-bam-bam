import pool from '@database'

export default async (req, res) => {

    try {

        const grupo = [
            req.params.id,
            req.body.codigo,
            req.body.descri
        ]
        console.log(grupo)
        const query = "CALL SUPER_ACTUALIZAR_GRUPOARTICULO(?,?,?)"

        const result = await pool.query(query, grupo);

        return res.json(result[0][0][0])

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el grupo de articulo",
            "err": err.message
        }
        console.log(data)
        return res.json(data)
    }

}
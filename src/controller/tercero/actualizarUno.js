import pool from '@database'

export default async (req, res) => {

    try {

        const tercero = [
            req.params.id,
            req.body.identificacion,
            req.body.nombre,
            req.body.apellido,
            req.body.correo,
            req.body.telefono,
            req.body.codigo,
            req.body.codtipo,
            req.body.sucid,
            req.body.codempresaprod
        ]

        const query = "CALL SUPER_ACTUALIZAR_TERCERO(?,?,?,?,?,?,?,?,?,?)"

        const result = await pool.query(query, tercero)

        return res.json(result[0][0][0])

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el tercero",
            "err": err.message
        }

        return res.json(data)
    }

}
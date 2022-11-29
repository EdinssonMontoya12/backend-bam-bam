import pool from '@database'

export default async (req, res) => {

    try {

        const tercero = [
            req.body.id,
            req.body.identificacion,
            req.body.nombre,
            req.body.codigo,
            req.body.codtipo,
            req.body.sucid,
            req.body.codempresaprod
        ]

        const query = "CALL SUPER_ACTUALIZAR_TERCERO(?,?,?,?,?,?,?)"

        const result = pool.query(query, tercero);

        return res.json(result[0][0][0])

    }catch(err){
        console.log(err)
    }

}
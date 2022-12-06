import pool from "@database"

export default async (req, res) => {
    try{

        let grupoarticulo = [
            req.body.codigotipofact,
            req.body.fecha,
            req.body.terceroid,
            req.body.sucid,
            req.body.observacion,
            req.body.numero,
            req.body.userid
        ]

        const consulta = "CALL SUPER_INSERTAR_FACTURA(?,?,?,?,?,?,?)" 
        
        const result = await pool.query(consulta, grupoarticulo);

        return res.json(result[0][0][0]);

    } catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar la factura",
            "err": err.message
        }

        return res.json(data)
    }
}
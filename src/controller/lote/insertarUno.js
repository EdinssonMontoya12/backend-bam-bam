import pool from "@database"

export default async (req, res) => {
    try{

        let lote = [
            req.body.articuloid,
            req.body.fechaven,
            req.body.cantidad,
            req.body.sucid,
            req.body.codigo
        ]

        const consulta = "CALL SUPER_INSERTAR_LOTE(?,?,?,?,?)";
        
        const result = await pool.query(consulta, lote);

        return res.json(result[0][0][0]);  

    } catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el lote",
            "err": err.message
        }

        return res.json(data)
    }
}
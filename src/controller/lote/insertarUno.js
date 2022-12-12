import pool from "@database"

export default async (req, res) => {
    try{

        let lote = [
            req.body.producto.split('/')[0].trim(),
            req.body.fechavenc,
            req.body.sucid,
            req.body.codigo
        ]
        console.log(lote)
        const consulta = "CALL SUPER_INSERTAR_LOTE(?,?,?,?)";
        
        const result = await pool.query(consulta, lote);

        return res.json(result[0][0][0]);  

    } catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el lote",
            "err": err.message
        }
        console.log(data)
        return res.json(data)
    }
}
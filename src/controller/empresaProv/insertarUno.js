import pool from "@database"

export default async (req, res) => {
    try{

        let empresa = [
            req.body.nombre,
            req.body.nit,
            req.body.sucid,
            req.body.codigo
        ]

        const consulta = "CALL SUPER_INSERTAR_EMPRESAPRO(?,?,?,?)";
        
        const result = await pool.query(consulta, empresa);

        return res.json(result[0][0][0]);  

    } catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el grupo de articulo",
            "err": err.message
        }

        return res.json(data) 
    }
}
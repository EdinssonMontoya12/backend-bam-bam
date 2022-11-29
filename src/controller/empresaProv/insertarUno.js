import pool from "@database"

export default async (req, res) => {
    try{

        let tercero = [
            req.body.identificacion,//
            req.body.nombre,//telefono, direccion,
            req.body.codigo,//
            req.body.codtipo,//
            req.body.sucid,
            req.body.codempresaprod
        ]

        const consulta = "CALL SUPER_INSERTAR_TERCERO(?,?,?,?,?,?)";
        
        const result = await pool.query(consulta, tercero);

        return res.json(result[0][0][0]);  

    } catch(err){
        console.error(err); 
    }
}
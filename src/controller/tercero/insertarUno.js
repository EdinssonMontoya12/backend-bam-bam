import pool from "@database"

export default async (req, res) => {
    try{

        let tercero = [
            req.body.identificacion,
            req.body.nombre,
            req.body.codigo,
            req.body.codtipo,
            req.body.sucid,
            req.body.codempresaprod,
            req.body.apellido,
            req.body.correo,
            req.body.telefono
        ]

        console.log(tercero)

        const consulta = "CALL SUPER_INSERTAR_TERCERO(?,?,?,?,?,?,?,?,?)";
        
        const result = await pool.query(consulta, tercero);

        console.log(result[0][0][0])

        return res.json(result[0][0][0]);  

    } catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el tercero",
            "err": err.message
        }
        console.log(data)
        return res.json(data)
    }
}
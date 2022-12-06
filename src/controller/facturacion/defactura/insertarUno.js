import pool from "@database"

export default async (req, res) => {
    try{

        let grupoarticulo = [
            req.body.codigogrup,
            req.body.descripcion,
            req.body.sucid
        ]

        const consulta = "CALL SUPER_INSERTAR_GRUPOARTICULO(?,?,?)";
        
        const result = await pool.query(consulta, grupoarticulo);

        return res.json(result[0][0][0]);

    } catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el el grupo de articulo",
            "err": err.message
        }

        return res.json(data)
    }
}
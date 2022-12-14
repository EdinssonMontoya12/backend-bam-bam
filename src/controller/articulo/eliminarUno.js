import pool from "@database";

export default async (req, res) => {
    try {
        
        const { id } = req.params;

        const consulta = "CALL SUPER_BORRAR_ARTICULO(?)";

        const result = await pool.query(consulta, [id]);

        return res.json(result[0][0][0]);

    } catch (error) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido eliminar el articulo",
            "err": error.message
        }
        console.log(data)
        return res.json(data)
    }
}
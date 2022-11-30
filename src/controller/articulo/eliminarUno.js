import pool from "@database";

export default async (req, res) => {
    try {
        
        const { id } = req.params;

        const consulta = "CALL SUPER_ELIMINAR_ARTICULO(?)";

        const result = await pool.query(consulta, [id]);

        return res.json(result[0][0][0]);

    } catch (error) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido eliminar el articulo",
            "err": err.message
        }

        return res.json(data)
    }
}
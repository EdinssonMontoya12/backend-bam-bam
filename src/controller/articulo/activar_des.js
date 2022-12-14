import pool from "@database";

export default async (req, res) => {
    try {

        const consulta = "CALL SUPER_ACTIVAR_DESACTIVAR_ARTICULO(?)";

        const result = await pool.query(consulta, [req.params.id]);

        return res.json(result[0][0][0]);

    } catch (error) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el articulo",
            "err": err.message
        }

        return res.json(data)
    }
}
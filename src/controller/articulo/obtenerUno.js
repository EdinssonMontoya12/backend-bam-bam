import pool from "@database"

export default async (req, res) => {
    try {

        let { id } = req.params;

        const consulta = "CALL SUPER_CONSULTAR_ARTICULO(?)";

        const result = await pool.query(consulta, [id]);

        const data = {
            "OSUCCESS": result[0][0].length > 0 ? 1 : 0,
            "DATA": result[0][0]
        };

        return res.status(200).json(data);

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido consultar el articulo",
            "err": err.message
        }

        return res.json(data)
    }
}
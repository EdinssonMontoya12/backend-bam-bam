import pool from "@database";

export default async (req, res) => {
    try {
        
        const producto = [
            req.body.id,
            req.body.codigo,
            eq.body.preciov,
            req.body.precioc,
            req.body.nombre,
            req.body.activo,
            req.body.cantmax,
            req.body.cantmin
        ]

        const consulta = "CALL SUPER_ACTUALIZAR_ARTICULO(?,?,?,?,?,?,?,?)";

        const result = await pool.query(consulta, producto);

        return res.json(result[0][0][0]);

    } catch (error) {
        console.error(error);
    }
}
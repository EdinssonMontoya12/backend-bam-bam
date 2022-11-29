import pool from "@database"

export default async (req, res) => {
    try {

        let producto = [
            req.body.codigo,
            req.body.preciov,
            req.body.precioc,
            req.body.comprapack,
            req.body.cantidadpack,
            req.body.sucid,
            req.body.nombre,
            req.body.activo,
            req.body.cantmax,
            req.body.cantmin
        ]



        const consulta = "CALL SUPER_INSERTAR_ARTICULO(?,?,?,?,?,?,?,?,?,?)";

        const result = await pool.query(consulta, producto);

        return res.json(result[0][0][0]);

    } catch (err) {
        console.error(err);
    }
}
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
            req.body.cantmin,
            req.body.grupartid
        ]

        const consulta = "CALL SUPER_INSERTAR_ARTICULO(?,?,?,?,?,?,?,?,?,?,?)";

        const result = await pool.query(consulta, producto);

        return res.json(result[0][0][0]);

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el articulo",
            "err": err.message
        }

        return res.json(data)
    }
}
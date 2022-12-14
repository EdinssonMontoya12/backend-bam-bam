import pool from "@database"

export default async (req, res) => {
    try {

        var cantidad = null

        if(req.body.radio1 == 1){
            cantidad = req.body.cantidadpack
        }

        let producto = [
            req.body.codigo,
            req.body.preciov,
            req.body.precioc,
            req.body.radio1,
            cantidad,
            req.body.sucid,
            req.body.nombre,
            req.body.cantmax,
            req.body.cantmin,
            req.body.selectGrupo.split('/')[0].trim(),
        ]

        const consulta = "CALL SUPER_INSERTAR_ARTICULO(?,?,?,?,?,?,?,?,?,?)";

        const result = await pool.query(consulta, producto);

        return res.json(result[0][0][0]);

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar el articulo",
            "err": err.message
        }
        console.log(data);
        return res.json(data)
    }
}
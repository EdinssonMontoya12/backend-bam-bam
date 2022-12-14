import pool from "@database";

export default async (req, res) => {
    try {

        var cantidad = null

        if(req.body.radio1 == 1){
            cantidad = req.body.cantidadpack
        }

        let producto = [
            req.params.id,
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


        const consulta = "CALL SUPER_ACTUALIZAR_ARTICULO(?,?,?,?,?,?,?,?,?,?,?)";

        const result = await pool.query(consulta, producto);

        return res.json(result[0][0][0]);

    } catch (error) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar el articulo",
            "err": error.message
        }
        console.log(data);
        return res.json(data)
    }
}
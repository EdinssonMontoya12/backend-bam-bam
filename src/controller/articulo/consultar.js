import pool from "@database"

export default async (req, res) => {
    try {

        let texto = [
            req.params.texto,
            req.params.sucid,
            req.params.activo
        ];
        console.log(texto);
        const consulta = "CALL SUPER_CONSULTAR_ARTICULOS(?, ?, ?)";

        const result = await pool.query(consulta, texto);

        const data = {
            "OSUCCESS": result[0][0].length > 0 ? 1 : 0,
            "DATA": result[0][0]
        };

        return res.json(data);

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido consultar el articulo",
            "err": err.message
        }

        return res.json(data)
    }
}
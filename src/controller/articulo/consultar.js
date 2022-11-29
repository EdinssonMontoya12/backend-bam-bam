import pool from "@database"

export default async (req, res) => {
    try {

        let texto = {
            texto: req.params.texto,
            sucid: req.params.sucid
        };

        const consulta = "CALL SUPER_CONSULTAR_ARTICULOS(?, ?)";

        const result = await pool.query(consulta, [texto.texto, texto.sucid]);

        const data = {
            "OSUCCESS": result[0][0].length > 0 ? 1 : 0,
            "DATA": result[0][0]
        };

        return res.json(data);

    } catch (err) {
        console.log(err);
    }
}
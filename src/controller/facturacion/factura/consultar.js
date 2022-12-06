import pool from '@database'

export default async (req, res) => {
    try{

        const texto = [
            req.params.sucid,
            req.params.texto,
            req.params.codfact
        ]

        const query = "CALL SUPER_CONSULTAR_FACTURAS(?, ?, ?)"

        const result = await pool.query(query, texto)

        const data = {
            "OSUCCESS": result[0][0].length > 0 ? 1 : 0,
            "DATA": result[0][0]
        }

        return res.json(data)

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido consultar el grupo de articulo",
            "err": err.message
        }

        return res.json(data)
    }
}
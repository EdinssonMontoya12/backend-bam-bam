import pool from '@database'

export default async (req, res) => {
    try{

        const texto = [
            req.params.texto,
            req.params.sucid
        ]

        const query = "CALL SUPER_CONSULTAR_TERCEROS(?, ?)"

        const result = await pool.query(query, texto)

        const data = {
            "OSUCCESS": result[0][0].length > 0 ? 1 : 0,
            "DATA": result[0][0]
        }

        return res.json(data)

    }catch(err){
        console.log(err)
    }
}
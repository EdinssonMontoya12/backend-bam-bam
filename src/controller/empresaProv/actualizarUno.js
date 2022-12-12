import pool from '@database'

export default async (req, res) => {

    try {

        const empresa = [
            req.params.id,
            req.body.nombre,
            req.body.nit,
            req.body.codigo
        ]
        console.log(empresa)
        const query = "CALL SUPER_ACTUALIZAR_EMPRESAPRO(?,?,?,?)"

        const result = await pool.query(query, empresa);

        return res.json(result[0][0][0])

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido actualizar la empresa proveedora",
            "err": err.message
        }
        console.log(data)
        return res.json(data)
    }

}
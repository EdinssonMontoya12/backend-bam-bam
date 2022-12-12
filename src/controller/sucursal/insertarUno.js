import pool from '@database'

export default async (req, res) => {

    try {

        const sucursal = [
            req.body.codigo,
            req.body.nombre,
            req.body.direccion,
            req.body.telefono,
            req.body.email
        ]
        console.log(sucursal)
        const query = "CALL SUPER_INSERTAR_SUCURSAL(?,?,?,?,?)"

        const result = await pool.query(query, sucursal)

        return res.json(result[0][0][0])

    } catch (err) {
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido insertar la sucursal",
            "err": err.message
        }
        console.log(data)
        return res.json(data)
    }

}
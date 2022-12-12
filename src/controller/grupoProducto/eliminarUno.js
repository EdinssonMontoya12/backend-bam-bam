import pool from '@database'
import { query } from 'express';

export default async (req, res) => {

    try{
        
        const { id } = req.params
        console.log(id)
        const query  = 'CALL SUPER_ELIMINAR_GRUPOARTICULO(?)'

        const result = await pool.query(query, [id])
        console.log(result[0][0][0])
        return res.json(result[0][0][0])

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido eliminar el el grupo de articulo",
            "err": err.message
        }
        console.log(data)
        return res.json(data)
    }

}
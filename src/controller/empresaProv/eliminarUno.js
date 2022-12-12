import pool from '@database'
import { query } from 'express';

export default async (req, res) => {

    try{
        
        const { id } = req.params

        const query  = 'CALL SUPER_BORRAR_EMPRESAPRO(?)'

        const result = await pool.query(query, [id])
        
        return res.json(result[0][0][0])

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido eliminar la empresa proveedora",
            "err": err.message
        }

        return res.json(data)
    }

}
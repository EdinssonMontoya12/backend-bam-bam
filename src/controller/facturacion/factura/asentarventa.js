import pool from '@database'

export default async (req, res) => {

    try {

        const detalles = req.body.detalles 

        var contador = 0
        var sePuedeAsentar = true
        var lote = null
        
        while(contador < detalles.length && sePuedeAsentar){
            const query = "CALL SUPER_CONSULTAR_LOTE(?)"
            var cantidadTotal = 0
            var datos = detalles.filter( x => x.loteid === detalles[contador].loteid)
            datos.forEach((x) => {
                cantidadTotal = cantidadTotal + x.cantidad
            });
            const result = await pool.query(query, detalles[contador].loteid)

            console.log(cantidadTotal)
            console.log(result[0][0][0])

            if(result[0][0][0].cantidad < cantidadTotal) {
                sePuedeAsentar = false
                lote = detalles[contador]
            }
            contador++
        }

        if(sePuedeAsentar){
            contador = 0;
            while(contador < detalles.length){
                const query = "CALL SUPER_CANTIDAD_LOTE(?,?)"
                const result = await pool.query(query, [(-(detalles[contador].cantidad)), detalles[contador].loteid])
                contador++
            }

            return res.json({
                OSUCCESS: 1,
                OMENSAJE: "Se puede asentar"
            })
        }else {
            return res.json({
                OSUCCESS: 0,
                OMENSAJE: `El articulo ${lote.productonombre} con lote ${lotecod} no tiene suficientes existencias`
            })
        }

    }catch(err){
        const data = {
            "OSUCCESS": 0,
            "OMENSAJE": "No se ha podido asentar la factura",
            "err": err.message
        }

        return res.json(data)
    }

}
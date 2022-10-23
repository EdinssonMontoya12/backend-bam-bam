import swaggerJSDoc  from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";

const options = {
    definition: {
        opeapi: "3.0.0",
        info: {
            tittle: "Gestion de inventario tiendas bam bam",
            version: "1.0.0",
            contact: {
                name: "Edinsson Alexis Montoya Cuadros - 1151901",
                email: "edinssonalexismcua@ufps.edu.co"
            }
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["src/doc/routes/*.js"]
}
const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app) => {
    app.use('/doc-bam-bam', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Buenas");
}

export default swaggerDocs;
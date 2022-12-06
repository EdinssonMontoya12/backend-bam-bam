import bcrypt from 'bcrypt'
const saltRounds = 15;

const encrypt = {}

encrypt.encriptar = async (contrasenia) => {
    return await bcrypt.hash(contrasenia, saltRounds)
}

encrypt.compare = async (contrasenia, contraseniaEncryp) => {
    return await bcrypt.compare(contrasenia, contraseniaEncryp)
}

export default encrypt
import bcrypt from 'bcrypt'
const saltRounds = 15;

const encrypt = {}

encrypt.encriptar = async (contrasenia) => {
    return await bcrypt.hash('1155708', saltRounds)
}

encrypt.compare = async (contrasenia, contraseniaEncryp) => {
    return await bcrypt.compare(contrasenia, contraseniaEncryp)
}

export default encrypt
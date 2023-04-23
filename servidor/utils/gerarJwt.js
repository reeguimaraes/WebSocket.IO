import jwt from "jsonwebtoken";

function gerarJwt(payload) {
    const tokenJWT = jwt.sign(payload, process.env.SEGREDO_JWT, {
        expiresIn: "1h",
    });

    return tokenJWT;

}

export default gerarJwt;
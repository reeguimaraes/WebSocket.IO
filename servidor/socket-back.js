import "dotenv/config";

import registrarEventosDocumentos from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

import io from "./servidor.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumentos(socket, nspUsuarios);
})

io.of("/").on("connection", (socket) => {
  registrarEventosLogin(socket, io);
  registrarEventosCadastro(socket, io);
});
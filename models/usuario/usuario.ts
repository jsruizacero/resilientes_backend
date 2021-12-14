import { Schema, model } from "mongoose";
import { Enum_Rol, Enum_EstadoUsuario } from "../enums/enums";

interface User {
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
}

const userSchema = new Schema<User>({
  correo: {
    type: String,
    // required: true,
    // validate: {
    //   validator: (email) => {
    //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);//validador encontrado en stackoverflow paa valira formate de e-mail
    //   },
    //   message: 'El texto escrito no corresponde a un formato de correo electrónico.',
    // },
  },
  identificacion: {
    type: String,
    // required: true,
  },
  nombre: {
    type: String,
    // required: true,
  },
  apellido: {
    type: String,
    // required: true,
  },
  rol: {
    type: String,
    // required: true,
    default: Enum_Rol.ESTUDIANTE,
    enum: Enum_Rol,
  },
  estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.PENDIENTE,
  },
});

const UserModel = model("User", userSchema);

export { UserModel };
